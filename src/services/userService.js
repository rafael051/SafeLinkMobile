import api from './api';

/**
 * 📦 Serviço: usuarioService
 * Define funções para consumir os endpoints da entidade Usuário na API.
 * Utiliza a instância global de Axios configurada em `api.js`
 */

/** 🔍 Lista todos os usuários cadastrados */
export const listarUsuarios = () => api.get('/user');

/** 🔍 Busca um usuário específico pelo ID */
export const buscarUsuarioPorId = (id) => api.get(`/user/${id}`);

/** 📝 Cria um novo usuário */
export const criarUsuario = (dados) => api.post('/user', dados);

/** ✏️ Atualiza um usuário existente pelo ID */
export const atualizarUsuario = (id, dados) => api.put(`/user/${id}`, dados);

/** 🗑️ Remove um usuário existente pelo ID */
export const deletarUsuario = (id) => api.delete(`/user/${id}`);
