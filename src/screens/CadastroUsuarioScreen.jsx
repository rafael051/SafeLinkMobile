import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert, ScrollView } from 'react-native';
import globalStyles from '../styles/globalStyles';
import FormInput from '../components/FormInput';
import { criarUsuario, atualizarUsuario, buscarUsuarioPorId } from '../services/userService';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

export default function CadastroUsuarioScreen() {
    const navigation = useNavigation();
    const route = useRoute();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [role, setRole] = useState('USER');

    const isEditando = route.params?.id;

    useEffect(() => {
        if (isEditando) {
            buscarUsuarioPorId(route.params.id).then(res => {
                const usuario = res.data;
                setEmail(usuario.email);
                setRole(usuario.role);
            });
        }
    }, []);

    const handleSalvar = async () => {
        const dto = { email, senha, role };

        try {
            if (isEditando) {
                await atualizarUsuario(route.params.id, dto);
                Alert.alert('Sucesso', 'Usuário atualizado com sucesso');
            } else {
                await criarUsuario(dto);
                Alert.alert('Sucesso', 'Usuário criado com sucesso');
            }
            navigation.goBack();
        } catch (error) {
            Alert.alert('Erro', 'Erro ao salvar usuário');
            console.error(error);
        }
    };

    return (
        <ScrollView contentContainerStyle={globalStyles.container}>
            <Text style={globalStyles.title}>{isEditando ? 'Editar Usuário' : 'Novo Usuário'}</Text>

            <FormInput label="Email" value={email} onChangeText={setEmail} placeholder="email@exemplo.com" />
            {!isEditando && (
                <FormInput label="Senha" value={senha} onChangeText={setSenha} placeholder="********" secureTextEntry />
            )}

            <Text style={globalStyles.inputLabel}>Role</Text>
            <View style={globalStyles.input}>
                <Picker selectedValue={role} onValueChange={(value) => setRole(value)}>
                    <Picker.Item label="USER" value="USER" />
                    <Picker.Item label="ADMIN" value="ADMIN" />
                </Picker>
            </View>

            <View style={globalStyles.button}>
                <Button title={isEditando ? 'Atualizar' : 'Salvar'} onPress={handleSalvar} color="#fff" />
            </View>
        </ScrollView>
    );
}
