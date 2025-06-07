import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, Alert } from 'react-native';
import globalStyles from '../styles/globalStyles';
import PrevisaoCard from '../components/PrevisaoCard';
import { listarPrevisoesRisco, deletarPrevisao } from '../services/previsaoRiscoService';
import { useNavigation } from '@react-navigation/native';

/**
 * 📋 Tela: ListagemPrevisoesScreen
 * Lista todas as previsões de risco cadastradas, com opção de editar ou excluir.
 */
export default function ListagemPrevisoesScreen() {
    const [previsoes, setPrevisoes] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    /** 🔄 Carrega a lista de previsões */
    const carregarPrevisoes = () => {
        setLoading(true);
        listarPrevisoesRisco()
            .then(res => setPrevisoes(res.data))
            .catch(err => console.error('Erro ao buscar previsões:', err))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        carregarPrevisoes();
    }, []);

    /** ❌ Exclui uma previsão com confirmação */
    const handleExcluir = (id) => {
        Alert.alert(
            'Confirmação',
            'Deseja realmente excluir esta previsão?',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Excluir',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            await deletarPrevisao(id);
                            Alert.alert('Sucesso', 'Previsão excluída com sucesso');
                            carregarPrevisoes();
                        } catch (error) {
                            console.error(error);
                            Alert.alert('Erro', 'Erro ao excluir previsão');
                        }
                    }
                }
            ]
        );
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Previsões de Risco</Text>

            {loading ? (
                <Text>Carregando...</Text>
            ) : previsoes.length === 0 ? (
                <Text>Nenhuma previsão encontrada.</Text>
            ) : (
                <FlatList
                    data={previsoes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('CadastroPrevisao', { id: item.id })}
                            onLongPress={() => handleExcluir(item.id)}
                        >
                            <PrevisaoCard previsao={item} />
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
}
