import React, { useEffect, useState } from 'react';
import {Text, Alert, ScrollView, TouchableOpacity } from 'react-native';
import globalStyles from '../styles/globalStyles';
import FormInput from '../components/FormInput';
import { criarEvento, atualizarEvento, buscarEventoPorId } from '../services/eventoNaturalService';
import { useNavigation, useRoute } from '@react-navigation/native';

/**
 * 📝 Tela: CadastroEventoScreen
 * Tela de formulário para criação ou edição de um evento natural.
 * Permite entrada dos campos tipo, descrição e data.
 */
export default function CadastroEventoScreen() {
    const navigation = useNavigation();
    const route = useRoute();

    const [tipo, setTipo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [data, setData] = useState('');

    const isEditando = route.params?.id;

    /** 🔄 Preenche os dados do evento se for edição */
    useEffect(() => {
        if (isEditando) {
            buscarEventoPorId(route.params.id).then(res => {
                const evento = res.data;
                setTipo(evento.tipo);
                setDescricao(evento.descricao);
                setData(evento.data);
            });
        }
    }, []);

    /** 💾 Salva ou atualiza o evento via API */
    const handleSalvar = async () => {
        const dto = { tipo, descricao, data };

        try {
            if (isEditando) {
                await atualizarEvento(route.params.id, dto);
                Alert.alert('Sucesso', 'Evento atualizado com sucesso');
            } else {
                await criarEvento(dto);
                Alert.alert('Sucesso', 'Evento criado com sucesso');
            }
            navigation.goBack();
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um problema ao salvar');
            console.error(error);
        }
    };

    return (
        <ScrollView contentContainerStyle={globalStyles.container}>
            <Text style={globalStyles.title}>{isEditando ? 'Editar Evento' : 'Novo Evento'}</Text>

            <FormInput label="Tipo" value={tipo} onChangeText={setTipo} placeholder="Ex: Tempestade" />
            <FormInput label="Descrição" value={descricao} onChangeText={setDescricao} placeholder="Descreva o evento" />
            <FormInput label="Data (dd/mm/aaaa hh:mm:ss)" value={data} onChangeText={setData} placeholder="Ex: 01/01/2025 14:00:00" />

            <TouchableOpacity style={globalStyles.button} onPress={handleSalvar}>
                <Text style={globalStyles.buttonText}>{isEditando ? 'Atualizar' : 'Salvar'}</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
