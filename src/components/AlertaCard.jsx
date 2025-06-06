import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

export default function AlertaCard({ alerta }) {
    return (
        <View style={globalStyles.card}>
            <Text style={globalStyles.cardPlaca}>{alerta.tipo}</Text>
            <Text style={globalStyles.text}>Risco: {alerta.nivelRisco}</Text>
            <Text style={globalStyles.text}>Emitido em: {new Date(alerta.emitidoEm).toLocaleString()}</Text>
            <Text style={globalStyles.cardModelo}>
                Local: {alerta.regiao?.cidade} - {alerta.regiao?.estado}
            </Text>
        </View>
    );
}
