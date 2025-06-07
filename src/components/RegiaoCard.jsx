import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

/**
 * 📦 Componente: RegiaoCard
 * Exibe os dados principais de uma região em formato de cartão.
 * Utilizado na listagem de regiões.
 *
 * Props:
 * - regiao: objeto contendo nome, cidade, estado, latitude e longitude
 */
export default function RegiaoCard({ regiao }) {
    return (
        <View style={globalStyles.card}>
            {/* Nome da região (ex: Zona Norte) */}
            <Text style={globalStyles.cardPlaca}>{regiao.nome}</Text>

            {/* Cidade e estado da região */}
            <Text style={globalStyles.text}>
                Cidade: {regiao.cidade} - {regiao.estado}
            </Text>

            {/* Coordenadas geográficas da região */}
            <Text style={globalStyles.text}>
                Coordenadas: {regiao.latitude.toFixed(4)}°, {regiao.longitude.toFixed(4)}°
            </Text>
        </View>
    );
}
