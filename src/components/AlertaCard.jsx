import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

/**
 * 📦 Componente: AlertaCard
 * Exibe os dados principais de um alerta em formato de cartão.
 * Usado nas telas de listagem de alertas, com suporte à estilização global.
 *
 * Props:
 * - alerta: objeto contendo os campos tipo, nivelRisco, emitidoEm e regiao (cidade/estado)
 */
export default function AlertaCard({ alerta }) {
    return (
        <View style={globalStyles.card}>
            {/* Título do alerta: o tipo do evento */}
            <Text style={globalStyles.cardPlaca}>{alerta.tipo}</Text>

            {/* Nível de risco */}
            <Text style={globalStyles.text}>Risco: {alerta.nivelRisco}</Text>

            {/* Data de emissão formatada */}
            <Text style={globalStyles.text}>
                Emitido em: {new Date(alerta.emitidoEm).toLocaleString()}
            </Text>

            {/* Localização (cidade e estado) */}
            <Text style={globalStyles.cardModelo}>
                Local: {alerta.regiao?.cidade} - {alerta.regiao?.estado}
            </Text>
        </View>
    );
}
