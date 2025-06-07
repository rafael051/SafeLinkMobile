import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, Alert } from 'react-native';
import globalStyles from '../styles/globalStyles';
import EventoCard from '../components/EventoCard';
import { listarEventosNaturais, deletarEvento } from '../services/eventoNaturalService';
import { useNavigation } from '@react-navigation/native';

/**
 * 📋 Tela: ListagemEventosScreen
 * Lista todos os eventos naturais cadastrados na API, com opção de editar ou excluir.
 */
export default function ListagemEventosScreen() {
    const [eventos, setEventos] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    /** 🔄 Carrega os dados dos eventos */
    const carregarEventos = () => {
        setLoading(true);
        listarEventosNaturais()
            .then(res => setEventos(res.data))
            .catch(err => console.error('Erro ao buscar eventos:', err))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        carregarEventos();
    }, []);

    /** ❌ Confirma e executa exclusão de um evento */
    const handleExcluir = (id) => {
        Alert.alert(
            'Confirmação',
            'Tem certeza que deseja excluir este evento?',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Excluir',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            await deletarEvento(id);
                            Alert.alert('Sucesso', 'Evento excluído com sucesso');
                            carregarEventos();
                        } catch (error) {
                            console.error(error);
                            Alert.alert('Erro', 'Erro ao excluir evento');
                        }
                    }
                }
            ]
        );
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Eventos Naturais</Text>
            {loading ? (
                <Text>Carregando...</Text>
            ) : eventos.length === 0 ? (
                <Text>Nenhum evento encontrado.</Text>
            ) : (
                <FlatList
                    data={eventos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('CadastroEvento', { id: item.id })}
                            onLongPress={() => handleExcluir(item.id)}
                        >
                            <EventoCard evento={item} />
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
}
