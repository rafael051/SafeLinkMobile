import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, Alert } from 'react-native';
import globalStyles from '../styles/globalStyles';
import UsuarioCard from '../components/UsuarioCard';
import { listarUsuarios, deletarUsuario } from '../services/userService';
import { useNavigation } from '@react-navigation/native';

/**
 * 📋 Tela: ListagemUsuariosScreen
 * Lista todos os usuários cadastrados na API, com opção de edição e exclusão.
 */
export default function ListagemUsuariosScreen() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    /** 🔄 Carrega os dados dos usuários */
    const carregarUsuarios = () => {
        setLoading(true);
        listarUsuarios()
            .then(res => setUsuarios(res.data))
            .catch(err => console.error('Erro ao buscar usuários:', err))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        carregarUsuarios();
    }, []);

    /** ❌ Confirma e executa exclusão de um usuário */
    const handleExcluir = (id) => {
        Alert.alert(
            'Confirmação',
            'Tem certeza que deseja excluir este usuário?',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Excluir',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            await deletarUsuario(id);
                            Alert.alert('Sucesso', 'Usuário excluído com sucesso');
                            carregarUsuarios();
                        } catch (error) {
                            console.error(error);
                            Alert.alert('Erro', 'Erro ao excluir usuário');
                        }
                    }
                }
            ]
        );
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Lista de Usuários</Text>

            {loading ? (
                <Text>Carregando...</Text>
            ) : usuarios.length === 0 ? (
                <Text>Nenhum usuário encontrado.</Text>
            ) : (
                <FlatList
                    data={usuarios}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('CadastroUsuario', { id: item.id })}
                            onLongPress={() => handleExcluir(item.id)}
                        >
                            <UsuarioCard usuario={item} />
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
}
