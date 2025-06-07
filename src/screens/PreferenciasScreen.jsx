import React, { useState } from 'react';
import { View, Text, Switch, Alert } from 'react-native';
import globalStyles from '../styles/globalStyles';

/**
 * ⚙️ Tela: PreferenciasScreen
 * Permite ao usuário alternar preferências locais como notificações e tema.
 */
export default function PreferenciasScreen() {
    const [notificacoesAtivas, setNotificacoesAtivas] = useState(true);
    const [temaEscuro, setTemaEscuro] = useState(false);

    /** 🔔 Alterna estado de notificações e exibe alerta */
    const toggleNotificacoes = () => {
        setNotificacoesAtivas((prev) => !prev);
        Alert.alert('Preferência atualizada', `Notificações ${!notificacoesAtivas ? 'ativadas' : 'desativadas'}`);
    };

    /** 🌗 Alterna estado de tema escuro e exibe alerta */
    const toggleTema = () => {
        setTemaEscuro((prev) => !prev);
        Alert.alert('Preferência atualizada', `Tema ${!temaEscuro ? 'escuro' : 'claro'}`);
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Preferências</Text>

            <View style={globalStyles.inputContainer}>
                <Text style={globalStyles.inputLabel}>Notificações</Text>
                <Switch value={notificacoesAtivas} onValueChange={toggleNotificacoes} />
            </View>

            <View style={globalStyles.inputContainer}>
                <Text style={globalStyles.inputLabel}>Tema Escuro</Text>
                <Switch value={temaEscuro} onValueChange={toggleTema} />
            </View>
        </View>
    );
}
