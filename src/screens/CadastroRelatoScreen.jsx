import React, { useEffect, useState } from 'react';
import { View, Text, Alert, ScrollView, TouchableOpacity } from 'react-native';
import globalStyles from '../styles/globalStyles';
import FormInput from '../components/FormInput';
import { criarRelato, atualizarRelato, buscarRelatoPorId } from '../services/relatoUsuarioService';
import { listarUsuarios } from '../services/userService';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

/**
 * 📝 Tela: CadastroRelatoScreen
 * Formulário para cadastro e edição de relatos de usuários.
 * Permite informar uma descrição e selecionar o usuário autor do relato.
 */
export default function CadastroRelatoScreen() {
    const navigation = useNavigation();
    const route = useRoute();

    const [descricao, setDescricao] = useState('');
    const [usuarioId, setUsuarioId] = useState('');
    const [usuarios, setUsuarios] = useState([]);

    const isEditando = route.params?.id;

    /** 🔄 Carrega os dados do relato e lista de usuários */
    useEffect(() => {
        listarUsuarios().then(res => setUsuarios(res.data));

        if (isEditando) {
            buscarRelatoPorId(route.params.id).then(res => {
                const relato = res.data;
                setDescricao(relato.descricao);
                setUsuarioId(relato.usuario?.id);
            });
        }
    }, []);

    /** 💾 Salva ou atualiza o relato via API */
    const handleSalvar = async () => {
        const dto = { descricao, usuarioId };

        try {
            if (isEditando) {
                await atualizarRelato(route.params.id, dto);
                Alert.alert('Sucesso', 'Relato atualizado com sucesso');
            } else {
                await criarRelato(dto);
                Alert.alert('Sucesso', 'Relato criado com sucesso');
            }
            navigation.goBack();
        } catch (error) {
            console.error(error);
            Alert.alert('Erro', 'Erro ao salvar relato');
        }
    };

    return (
        <ScrollView contentContainerStyle={globalStyles.container}>
            <Text style={globalStyles.title}>{isEditando ? 'Editar Relato' : 'Novo Relato'}</Text>

            <FormInput label="Descrição" value={descricao} onChangeText={setDescricao} placeholder="Escreva o relato..." />

            <Text style={globalStyles.inputLabel}>Usuário</Text>
            <View style={globalStyles.input}>
                <Picker
                    selectedValue={usuarioId}
                    onValueChange={(itemValue) => setUsuarioId(itemValue)}>
                    <Picker.Item label="Selecione..." value="" />
                    {usuarios.map((usuario) => (
                        <Picker.Item key={usuario.id} label={usuario.email} value={usuario.id} />
                    ))}
                </Picker>
            </View>

            <TouchableOpacity style={globalStyles.button} onPress={handleSalvar}>
                <Text style={globalStyles.buttonText}>{isEditando ? 'Atualizar' : 'Salvar'}</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
