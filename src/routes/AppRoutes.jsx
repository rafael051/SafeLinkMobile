import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 🏠 Telas principais
import HomeScreen from '../screens/HomeScreen';

// 📋 Listagens
import ListagemAlertasScreen from '../screens/ListagemAlertasScreen';
import ListagemEventosScreen from '../screens/ListagemEventosScreen';
import ListagemPrevisoesScreen from '../screens/ListagemPrevisoesScreen';
import ListagemRegioesScreen from '../screens/ListagemRegioesScreen';
import ListagemRelatosScreen from '../screens/ListagemRelatosScreen';
import ListagemUsuariosScreen from '../screens/ListagemUsuariosScreen';

// ✍️ Formulários de cadastro e edição
import CadastroAlertaScreen from '../screens/CadastroAlertaScreen';
import CadastroEventoScreen from '../screens/CadastroEventoScreen';
import CadastroPrevisaoScreen from '../screens/CadastroPrevisaoScreen';
import CadastroRegiaoScreen from '../screens/CadastroRegiaoScreen';
import CadastroRelatoScreen from '../screens/CadastroRelatoScreen';
import CadastroUsuarioScreen from '../screens/CadastroUsuarioScreen';

// 🔎 Detalhes e configurações
import DetalheAlertaScreen from '../screens/DetalheAlertaScreen';
import PreferenciasScreen from '../screens/PreferenciasScreen';

// 📦 Stack Navigator
const Stack = createNativeStackNavigator();

/**
 * 📚 Componente: AppRoutes
 * Define todas as rotas de navegação do aplicativo SafeLink utilizando React Navigation.
 */
export default function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                {/* Tela inicial */}
                <Stack.Screen name="Home" component={HomeScreen} />

                {/* Telas de listagem */}
                <Stack.Screen name="ListagemAlertas" component={ListagemAlertasScreen} />
                <Stack.Screen name="ListagemEventos" component={ListagemEventosScreen} />
                <Stack.Screen name="ListagemPrevisoes" component={ListagemPrevisoesScreen} />
                <Stack.Screen name="ListagemRegioes" component={ListagemRegioesScreen} />
                <Stack.Screen name="ListagemRelatos" component={ListagemRelatosScreen} />
                <Stack.Screen name="ListagemUsuarios" component={ListagemUsuariosScreen} />

                {/* Telas de cadastro/edição */}
                <Stack.Screen name="CadastroAlerta" component={CadastroAlertaScreen} />
                <Stack.Screen name="CadastroEvento" component={CadastroEventoScreen} />
                <Stack.Screen name="CadastroPrevisao" component={CadastroPrevisaoScreen} />
                <Stack.Screen name="CadastroRegiao" component={CadastroRegiaoScreen} />
                <Stack.Screen name="CadastroRelato" component={CadastroRelatoScreen} />
                <Stack.Screen name="CadastroUsuario" component={CadastroUsuarioScreen} />

                {/* Tela de detalhe e preferências */}
                <Stack.Screen name="DetalheAlerta" component={DetalheAlertaScreen} />
                <Stack.Screen name="Preferencias" component={PreferenciasScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
