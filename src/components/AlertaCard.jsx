import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

/**
 * 📦 Componente: AlertaCard
 *
 * Exibe os dados principais de um alerta em formato de cartão.
 * Usado nas telas de listagem de alertas, com suporte à estilização global.
 *
 * Props:
 * - alerta: objeto contendo os campos:
 *   - tipo: tipo do evento
 *   - nivelRisco: nível de risco do alerta
 *   - emitidoEm: data e hora de emissão
 *   - regiao: objeto com cidade e estado
 */
export default function AlertaCard({ alerta }) {
    return (
        <View style={globalStyles.card}>
            {/* 🏷️ Tipo do alerta */}
            <Text style={globalStyles.cardPlaca}>
                {alerta?.tipo ?? 'Tipo não informado'}
            </Text>

            {/* ⚠️ Nível de risco */}
            <Text style={globalStyles.text}>
                Risco: {alerta?.nivelRisco ?? 'Desconhecido'}
            </Text>

            {/* 🕒 Data de emissão formatada */}
            <Text style={globalStyles.text}>
                Emitido em:{' '}
                {alerta?.emitidoEm
                    ? new Date(alerta.emitidoEm).toLocaleString()
                    : 'Data não disponível'}
            </Text>

            {/* 🌎 Localização (cidade - estado) */}
            <Text style={globalStyles.cardModelo}>
                Local: {alerta?.regiao?.cidade ?? 'Cidade desconhecida'} -{' '}
                {alerta?.regiao?.estado ?? 'UF'}
            </Text>
        </View>
    );
}
