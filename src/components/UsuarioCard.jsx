import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

/**
 * 📦 Componente: UsuarioCard
 * Exibe as informações básicas de um usuário do sistema.
 * Utilizado na listagem de usuários.
 *
 * Props:
 * - usuario: objeto contendo email e role (papel do usuário no sistema)
 */
export default function UsuarioCard({ usuario }) {
    return (
        <View style={globalStyles.card}>
            {/* E-mail do usuário */}
            <Text style={globalStyles.cardPlaca}>{usuario.email}</Text>

            {/* Papel ou função atribuída ao usuário */}
            <Text style={globalStyles.text}>Papel: {usuario.role}</Text>
        </View>
    );
}
