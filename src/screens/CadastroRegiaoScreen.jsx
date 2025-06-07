import React, { useEffect, useState } from 'react';
import {Text, Alert, ScrollView, TouchableOpacity } from 'react-native';
import globalStyles from '../styles/globalStyles';
import FormInput from '../components/FormInput';
import { criarRegiao, atualizarRegiao, buscarRegiaoPorId } from '../services/regiaoService';
import { useNavigation, useRoute } from '@react-navigation/native';

/**
 * 📝 Tela: CadastroRegiaoScreen
 * Formulário para cadastro e edição de regiões.
 * Permite definir nome, cidade, estado e coordenadas geográficas.
 */
export default function CadastroRegiaoScreen() {
    const navigation = useNavigation();
    const route = useRoute();

    const [nome, setNome] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const isEditando = route.params?.id;

    /** 🔄 Preenche o formulário se estiver em modo de edição */
    useEffect(() => {
        if (isEditando) {
            buscarRegiaoPorId(route.params.id).then(res => {
                const regiao = res.data;
                setNome(regiao.nome);
                setCidade(regiao.cidade);
                setEstado(regiao.estado);
                setLatitude(String(regiao.latitude));
                setLongitude(String(regiao.longitude));
            });
        }
    }, [isEditando]);

    /** 💾 Salva ou atualiza a região via API */
    const handleSalvar = async () => {
        const dto = {
            nome,
            cidade,
            estado,
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude)
        };

        try {
            if (isEditando) {
                await atualizarRegiao(route.params.id, dto);
                Alert.alert('Sucesso', 'Região atualizada com sucesso');
            } else {
                await criarRegiao(dto);
                Alert.alert('Sucesso', 'Região criada com sucesso');
            }
            navigation.goBack();
        } catch (error) {
            console.error(error);
            Alert.alert('Erro', 'Erro ao salvar região');
        }
    };

    return (
        <ScrollView contentContainerStyle={globalStyles.container}>
            <Text style={globalStyles.title}>{isEditando ? 'Editar Região' : 'Nova Região'}</Text>

            <FormInput label="Nome" value={nome} onChangeText={setNome} placeholder="Ex: Zona Leste" />
            <FormInput label="Cidade" value={cidade} onChangeText={setCidade} placeholder="Ex: São Paulo" />
            <FormInput label="Estado" value={estado} onChangeText={setEstado} placeholder="Ex: SP" />
            <FormInput label="Latitude" value={latitude} onChangeText={setLatitude} placeholder="Ex: -23.5505" />
            <FormInput label="Longitude" value={longitude} onChangeText={setLongitude} placeholder="Ex: -46.6333" />

            <TouchableOpacity style={globalStyles.button} onPress={handleSalvar}>
                <Text style={globalStyles.buttonText}>{isEditando ? 'Atualizar' : 'Salvar'}</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
