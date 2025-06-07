import 'react-native-gesture-handler';
import React from 'react';
import AppRoutes from './src/routes/AppRoutes.jsx';

/**
 * 🎯 Componente raiz do aplicativo
 * Renderiza a navegação do app e define a barra de status.
 */
export default function App() {
  return <AppRoutes />;
}
