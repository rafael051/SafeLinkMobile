import React from 'react';
import { TextInput, View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

/**
 * 📦 Componente: FormInput
 * Campo de entrada reutilizável com rótulo opcional.
 * Facilita a criação de formulários padronizados com suporte a estilização global.
 *
 * Props:
 * - label: texto do rótulo (opcional)
 * - value: valor atual do campo
 * - onChangeText: função chamada ao alterar o texto
 * - placeholder: texto de exemplo dentro do campo
 * - secureTextEntry: define se o campo esconde os caracteres (ex: senhas)
 */
export default function FormInput({ label, value, onChangeText, placeholder, secureTextEntry = false }) {
    return (
        <View style={globalStyles.inputContainer}>
            {/* Rótulo opcional acima do campo */}
            {label && <Text style={globalStyles.inputLabel}>{label}</Text>}

            {/* Campo de entrada de texto estilizado */}
            <TextInput
                style={globalStyles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
}
