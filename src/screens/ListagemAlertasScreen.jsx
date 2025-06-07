import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, Alert } from 'react-native';
import globalStyles from '../styles/globalStyles';
import AlertaCard from '../components/AlertaCard';
import { listarAlertas, deletarAlerta } from '../services/alertaService';
import { useNavigation } from '@react-navigation/native';

/**
 * 📋 Tela: ListagemAlertasScreen
 * Lista todos os alertas cadastrados na API, com possibilidade de navegar para detalhes ou excluir.
 */
export default function ListagemAlertasScreen() {
    const [alertas, setAlertas] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    /** 🔄 Carrega os dados dos alertas */
    const carregarAlertas = () => {
        setLoading(true);
        listarAlertas()
            .then(res => {
                const lista = Array.isArray(res.data) ? res.data : [];
                setAlertas(lista);
            })
            .catch(err => {
                console.error('Erro ao buscar alertas:', err);
                setAlertas([]); // Evita estado indefinido
            })
            .finally(() => setLoading(false));
    };


    useEffect(() => {
        carregarAlertas();
    }, []);

    /** ❌ Confirma e executa exclusão de um alerta */
    const handleExcluir = (id) => {
        Alert.alert(
            'Confirmação',
            'Tem certeza que deseja excluir este alerta?',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Excluir',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            await deletarAlerta(id);
                            Alert.alert('Sucesso', 'Alerta excluído com sucesso');
                            carregarAlertas();
                        } catch (error) {
                            console.error(error);
                            Alert.alert('Erro', 'Erro ao excluir alerta');
                        }
                    }
                }
            ]
        );
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Lista de Alertas</Text>

            {loading ? (
                <Text>Carregando...</Text>
            ) : alertas.length === 0 ? (
                <Text>Nenhum alerta encontrado.</Text>
            ) : (
                <FlatList
                    data={alertas}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('DetalheAlerta', { id: item.id })}
                            onLongPress={() => handleExcluir(item.id)}
                        >
                            <AlertaCard alerta={item} />
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
}
