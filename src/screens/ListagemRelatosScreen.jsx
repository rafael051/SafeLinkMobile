import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, Alert } from 'react-native';
import globalStyles from '../styles/globalStyles';
import RelatoCard from '../components/RelatoCard';
import { listarRelatosUsuario, deletarRelato } from '../services/relatoUsuarioService';
import { useNavigation } from '@react-navigation/native';

/**
 * 📋 Tela: ListagemRelatosScreen
 * Lista todos os relatos de usuários cadastrados na API, com opção de edição e exclusão.
 */
export default function ListagemRelatosScreen() {
    const [relatos, setRelatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    /** 🔄 Carrega os dados dos relatos */
    const carregarRelatos = () => {
        setLoading(true);
        listarRelatosUsuario()
            .then(res => setRelatos(res.data))
            .catch(err => console.error('Erro ao buscar relatos:', err))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        carregarRelatos();
    }, []);

    /** ❌ Confirma e executa exclusão de um relato */
    const handleExcluir = (id) => {
        Alert.alert(
            'Confirmação',
            'Tem certeza que deseja excluir este relato?',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Excluir',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            await deletarRelato(id);
                            Alert.alert('Sucesso', 'Relato excluído com sucesso');
                            carregarRelatos();
                        } catch (error) {
                            console.error(error);
                            Alert.alert('Erro', 'Erro ao excluir relato');
                        }
                    }
                }
            ]
        );
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Relatos de Usuários</Text>

            {loading ? (
                <Text>Carregando...</Text>
            ) : relatos.length === 0 ? (
                <Text>Nenhum relato encontrado.</Text>
            ) : (
                <FlatList
                    data={relatos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('CadastroRelato', { id: item.id })}
                            onLongPress={() => handleExcluir(item.id)}
                        >
                            <RelatoCard relato={item} />
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
}
