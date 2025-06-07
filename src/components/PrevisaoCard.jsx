import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

/**
 * 📦 Componente: PrevisaoCard
 * Exibe as informações de uma previsão de risco de forma visual em um cartão.
 * Utilizado na listagem de previsões.
 *
 * Props:
 * - previsao: objeto contendo tipo, nivelRisco e regiao (cidade e estado)
 */
export default function PrevisaoCard({ previsao }) {
    return (
        <View style={globalStyles.card}>
            {/* Tipo de previsão (ex: tempestade, seca) */}
            <Text style={globalStyles.cardPlaca}>{previsao.tipo}</Text>

            {/* Nível de risco associado à previsão */}
            <Text style={globalStyles.text}>Risco: {previsao.nivelRisco}</Text>

            {/* Cidade e estado vinculados à região da previsão */}
            <Text style={globalStyles.text}>
                Região: {previsao.regiao?.cidade} - {previsao.regiao?.estado}
            </Text>
        </View>
    );
}
