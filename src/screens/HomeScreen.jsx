import React from 'react';
import { Text, ScrollView, TouchableOpacity } from 'react-native';
import globalStyles from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';

/**
 * 🏠 Tela Inicial (HomeScreen)
 * Esta tela centraliza a navegação para todas as funcionalidades principais do app SafeLink,
 * como visualização e cadastro de alertas, eventos naturais, previsões de risco, regiões,
 * relatos de usuários e usuários do sistema.
 */
export default function HomeScreen() {
    const navigation = useNavigation();

    const Botao = ({ title, screen }) => (
        <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate(screen)}>
            <Text style={globalStyles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );

    return (
        <ScrollView contentContainerStyle={globalStyles.container}>
            <Text style={globalStyles.title}>🏠 SafeLink - Tela Inicial</Text>

            {/* Navegação para telas de listagem */}
            <Botao title="Listar Alertas" screen="ListagemAlertas" />
            <Botao title="Listar Eventos Naturais" screen="ListagemEventos" />
            <Botao title="Listar Previsões de Risco" screen="ListagemPrevisoes" />
            <Botao title="Listar Regiões" screen="ListagemRegioes" />
            <Botao title="Listar Relatos de Usuário" screen="ListagemRelatos" />
            <Botao title="Listar Usuários" screen="ListagemUsuarios" />

            <Text style={[globalStyles.title, { marginTop: 32 }]}>Cadastro Rápido</Text>

            <Botao title="Novo Alerta" screen="CadastroAlerta" />
            <Botao title="Novo Evento" screen="CadastroEvento" />
            <Botao title="Nova Previsão" screen="CadastroPrevisao" />
            <Botao title="Nova Região" screen="CadastroRegiao" />
            <Botao title="Novo Relato" screen="CadastroRelato" />
            <Botao title="Novo Usuário" screen="CadastroUsuario" />
        </ScrollView>
    );
}