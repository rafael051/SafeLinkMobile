import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, Alert } from 'react-native';
import globalStyles from '../styles/globalStyles';
import RegiaoCard from '../components/RegiaoCard';
import { listarRegioes, deletarRegiao } from '../services/regiaoService';
import { useNavigation } from '@react-navigation/native';

export default function ListagemRegioesScreen() {
    const [regioes, setRegioes] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    const carregarRegioes = () => {
        setLoading(true);
        listarRegioes()
            .then(res => setRegioes(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        carregarRegioes();
    }, []);

    const handleExcluir = (id) => {
        Alert.alert(
            'Confirmação',
            'Tem certeza que deseja excluir esta região?',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Excluir',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            await deletarRegiao(id);
                            Alert.alert('Sucesso', 'Região excluída com sucesso');
                            carregarRegioes();
                        } catch (error) {
                            console.error(error);
                            Alert.alert('Erro', 'Erro ao excluir região');
                        }
                    }
                }
            ]
        );
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Lista de Regiões</Text>
            {loading ? (
                <Text>Carregando...</Text>
            ) : regioes.length === 0 ? (
                <Text>Nenhuma região encontrada.</Text>
            ) : (
                <FlatList
                    data={regioes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('CadastroRegiao', { id: item.id })}
                            onLongPress={() => handleExcluir(item.id)}
                        >
                            <RegiaoCard regiao={item} />
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
}
