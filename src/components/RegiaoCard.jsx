import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

export default function RegiaoCard({ regiao }) {
    return (
        <View style={globalStyles.card}>
            <Text style={globalStyles.cardPlaca}>{regiao.nome}</Text>
            <Text style={globalStyles.text}>
                Localização: {regiao.cidade} - {regiao.estado}
            </Text>
            <Text style={globalStyles.text}>Lat: {regiao.latitude}</Text>
            <Text style={globalStyles.text}>Long: {regiao.longitude}</Text>
        </View>
    );
}
