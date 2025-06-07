import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import globalStyles from '../styles/globalStyles';
import FormInput from '../components/FormInput';
import { criarAlerta, atualizarAlerta, buscarAlertaPorId } from '../services/alertaService';
import { listarRegioes } from '../services/regiaoService';
import { Picker } from '@react-native-picker/picker';
import { useNavigation, useRoute } from '@react-navigation/native';

/**
 * 📝 Tela: CadastroAlertaScreen
 * Tela de formulário para criação ou edição de um alerta.
 * Permite entrada dos campos tipo, nível de risco, data e região.
 */
export default function CadastroAlertaScreen() {
    const navigation = useNavigation();
    const route = useRoute();

    const [tipo, setTipo] = useState('');
    const [nivelRisco, setNivelRisco] = useState('');
    const [emitidoEm, setEmitidoEm] = useState('');
    const [regiaoId, setRegiaoId] = useState('');
    const [regioes, setRegioes] = useState([]);

    const isEditando = route.params?.id;

    /** 🔄 Carrega regiões e, se for edição, preenche dados existentes */
    useEffect(() => {
        listarRegioes().then(res => setRegioes(res.data));

        if (isEditando) {
            buscarAlertaPorId(route.params.id).then(res => {
                const alerta = res.data;
                setTipo(alerta.tipo);
                setNivelRisco(alerta.nivelRisco);
                setEmitidoEm(alerta.emitidoEm);
                setRegiaoId(alerta.regiao?.id);
            });
        }
    }, []);

    /** 💾 Salva ou atualiza o alerta via API */
    const handleSalvar = async () => {
        const dto = { tipo, nivelRisco, emitidoEm, regiaoId };

        try {
            if (isEditando) {
                await atualizarAlerta(route.params.id, dto);
                Alert.alert('Sucesso', 'Alerta atualizado com sucesso');
            } else {
                await criarAlerta(dto);
                Alert.alert('Sucesso', 'Alerta criado com sucesso');
            }
            navigation.goBack();
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um problema ao salvar');
            console.error(error);
        }
    };

    return (
        <ScrollView contentContainerStyle={globalStyles.container}>
            <Text style={globalStyles.title}>{isEditando ? 'Editar Alerta' : 'Novo Alerta'}</Text>

            <FormInput label="Tipo" value={tipo} onChangeText={setTipo} placeholder="Ex: Enchente" />
            <FormInput label="Nível de Risco" value={nivelRisco} onChangeText={setNivelRisco} placeholder="Ex: Alto" />
            <FormInput label="Emitido em (formato ISO)" value={emitidoEm} onChangeText={setEmitidoEm} placeholder="Ex: 2025-06-01T14:00:00" />

            {/* Seleção de região associada ao alerta */}
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

            {/* Botão de ação (Salvar ou Atualizar) */}
            <TouchableOpacity style={globalStyles.button} onPress={handleSalvar}>
                <Text style={globalStyles.buttonText}>{isEditando ? 'Atualizar' : 'Salvar'}</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
