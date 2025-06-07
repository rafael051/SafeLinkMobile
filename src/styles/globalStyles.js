import { StyleSheet } from 'react-native';

/**
 * 🎨 Estilos Globais
 * Utilizados em todas as telas e componentes da aplicação SafeLink.
 */
export default StyleSheet.create({
    // Container principal das telas
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#f2f2f2',
    },

    // Container de inputs e campos agrupados
    inputContainer: {
        marginBottom: 16,
    },

    // Rótulo de campos de formulário
    inputLabel: {
        marginBottom: 6,
        fontWeight: '600',
        fontSize: 14,
        color: '#444',
    },

    // Estilo base de inputs e Pickers
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#fff',
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },

    // Estilo de botões principais
    button: {
        marginVertical: 14,
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 12,
        backgroundColor: '#2563EB',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },

    // Texto de botões
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.5,
    },

    // Título principal das telas
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 20,
        color: '#111',
    },

    // Cartão base utilizado nas listagens
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
    },

    // Título principal dentro do card
    cardPlaca: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 6,
        color: '#111',
    },

    // Subtexto ou descrição complementar no card
    cardModelo: {
        fontSize: 15,
        color: '#555',
        marginBottom: 4,
    },

    // Texto base usado em todo app
    text: {
        fontSize: 16,
        color: '#333',
        lineHeight: 22,
    },

    // Cabeçalho da aplicação
    header: {
        backgroundColor: '#2563EB',
    },

    // Título do cabeçalho
    headerTitle: {
        fontWeight: '700',
        fontSize: 20,
        color: '#fff',
    },
});
