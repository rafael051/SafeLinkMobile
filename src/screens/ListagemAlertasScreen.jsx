import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';
import AlertaCard from '../components/AlertaCard';
import { listarAlertas } from '../services/alertaService';

export default function ListagemAlertasScreen() {
    const [alertas, setAlertas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        listarAlertas()
            .then(res => setAlertas(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Lista de Alertas</Text>
            {loading ? (
                <Text>Carregando...</Text>
            ) : alertas.length === 0 ? (
                <Text>Nenhum alerta encontrado.</Text>
            ) : (
                <FlatList
                    data={alertas}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <AlertaCard alerta={item} />}
                />
            )}
        </View>
    );
}
