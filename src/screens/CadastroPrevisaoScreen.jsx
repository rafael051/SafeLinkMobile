import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import globalStyles from '../styles/globalStyles';
import FormInput from '../components/FormInput';
import { criarPrevisao, atualizarPrevisao, buscarPrevisaoPorId } from '../services/previsaoRiscoService';
import { listarRegioes } from '../services/regiaoService';
import { Picker } from '@react-native-picker/picker';
import { useNavigation, useRoute } from '@react-navigation/native';

/**
 * 📝 Tela: CadastroPrevisaoScreen
 * Formulário para cadastro e edição de previsões de risco por região.
 */
export default function CadastroPrevisaoScreen() {
    const navigation = useNavigation();
    const route = useRoute();

    const [tipo, setTipo] = useState('');
    const [nivelRisco, setNivelRisco] = useState('');
    const [regiaoId, setRegiaoId] = useState('');
    const [regioes, setRegioes] = useState([]);

    const isEditando = route.params?.id;

    /** 🔄 Carrega dados da previsão (se edição) e lista de regiões */
    useEffect(() => {
        listarRegioes().then(res => setRegioes(res.data));

        if (isEditando) {
            buscarPrevisaoPorId(route.params.id).then(res => {
                const previsao = res.data;
                setTipo(previsao.tipo);
                setNivelRisco(previsao.nivelRisco);
                setRegiaoId(previsao.regiao?.id);
            });
        }
    }, []);

    /** 💾 Salva ou atualiza a previsão */
    const handleSalvar = async () => {
        const dto = { tipo, nivelRisco, regiaoId };

        try {
            if (isEditando) {
                await atualizarPrevisao(route.params.id, dto);
                Alert.alert('Sucesso', 'Previsão atualizada com sucesso');
            } else {
                await criarPrevisao(dto);
                Alert.alert('Sucesso', 'Previsão criada com sucesso');
            }
            navigation.goBack();
        } catch (error) {
            console.error(error);
            Alert.alert('Erro', 'Erro ao salvar previsão');
        }
    };

    return (
        <ScrollView contentContainerStyle={globalStyles.container}>
            <Text style={globalStyles.title}>{isEditando ? 'Editar Previsão' : 'Nova Previsão'}</Text>

            <FormInput label="Tipo" value={tipo} onChangeText={setTipo} placeholder="Ex: Tempestade severa" />
            <FormInput label="Nível de Risco" value={nivelRisco} onChangeText={setNivelRisco} placeholder="Ex: Alto" />

            <Text style={globalStyles.inputLabel}>Região</Text>
            <View style={globalStyles.input}>
                <Picker
                    selectedValue={regiaoId}
                    onValueChange={(itemValue) => setRegiaoId(itemValue)}>
                    <Picker.Item label="Selecione..." value="" />
                    {regioes.map((regiao) => (
                        <Picker.Item key={regiao.id} label={regiao.nome} value={regiao.id} />
                    ))}
                </Picker>
            </View>

            <TouchableOpacity style={globalStyles.button} onPress={handleSalvar}>
                <Text style={globalStyles.buttonText}>{isEditando ? 'Atualizar' : 'Salvar'}</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
