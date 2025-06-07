import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import globalStyles from '../styles/globalStyles';
import { buscarAlertaPorId } from '../services/alertaService';

export default function DetalheAlertaScreen() {
    const route = useRoute();
    const [alerta, setAlerta] = useState(null);
    const id = route.params?.id;

    useEffect(() => {
        if (id) {
            buscarAlertaPorId(id)
                .then(res => setAlerta(res.data))
                .catch(err => {
                    console.error(err);
                    Alert.alert('Erro', 'Não foi possível carregar o alerta.');
                });
        }
    }, [id]);

    if (!alerta) {
        return (
            <View style={globalStyles.container}>
                <Text>Carregando alerta...</Text>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={globalStyles.container}>
            <Text style={globalStyles.title}>Detalhes do Alerta</Text>

            <Text style={globalStyles.inputLabel}>Tipo</Text>
            <Text style={globalStyles.text}>{alerta.tipo}</Text>

            <Text style={globalStyles.inputLabel}>Nível de Risco</Text>
            <Text style={globalStyles.text}>{alerta.nivelRisco}</Text>

            <Text style={globalStyles.inputLabel}>Emitido em</Text>
            <Text style={globalStyles.text}>{new Date(alerta.emitidoEm).toLocaleString()}</Text>

            <Text style={globalStyles.inputLabel}>Região</Text>
            <Text style={globalStyles.text}>
                {alerta.regiao?.nome} ({alerta.regiao?.cidade} - {alerta.regiao?.estado})
            </Text>
        </ScrollView>
    );
}
