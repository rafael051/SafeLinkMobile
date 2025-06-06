import React from 'react';
import { TextInput, View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

export default function FormInput({ label, value, onChangeText, placeholder, secureTextEntry = false }) {
    return (
        <View style={globalStyles.inputContainer}>
            {label && <Text style={globalStyles.inputLabel}>{label}</Text>}
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
