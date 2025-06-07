import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

/**
 * 📦 Componente: RelatoCard
 * Exibe os detalhes de um relato feito por um usuário.
 * Utilizado na listagem de relatos.
 *
 * Props:
 * - relato: objeto contendo descricao, data e usuário (com e-mail)
 */
export default function RelatoCard({ relato }) {
    return (
        <View style={globalStyles.card}>
            {/* E-mail do usuário que fez o relato */}
            <Text style={globalStyles.cardPlaca}>{relato.usuario?.email}</Text>

            {/* Texto descritivo do relato */}
            <Text style={globalStyles.text}>{relato.descricao}</Text>

            {/* Data formatada do relato */}
            <Text style={globalStyles.text}>
                Data: {new Date(relato.data).toLocaleString()}
            </Text>
        </View>
    );
}
