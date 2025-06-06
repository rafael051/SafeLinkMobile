import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';
import RegiaoCard from '../components/RegiaoCard';
import { listarRegioes } from '../services/regiaoService';

export default function ListagemRegioesScreen() {
    const [regioes, setRegioes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        listarRegioes()
            .then(res => setRegioes(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

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
                    renderItem={({ item }) => <RegiaoCard regiao={item} />}
                />
            )}
        </View>
    );
}
