import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

/**
 * 📦 Componente: EventoCard
 * Exibe os detalhes principais de um evento natural em formato de cartão.
 * Utilizado na listagem de eventos naturais.
 *
 * Props:
 * - evento: objeto contendo tipo, descricao e data
 */
export default function EventoCard({ evento }) {
    return (
        <View style={globalStyles.card}>
            {/* Tipo do evento (ex: enchente, deslizamento) */}
            <Text style={globalStyles.cardPlaca}>{evento.tipo}</Text>

            {/* Descrição detalhada do evento */}
            <Text style={globalStyles.text}>{evento.descricao}</Text>

            {/* Data do evento formatada */}
            <Text style={globalStyles.text}>
                Data: {new Date(evento.data).toLocaleString()}
            </Text>
        </View>
    );
}
