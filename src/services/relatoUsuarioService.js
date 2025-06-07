import api from './api';

/**
 * 📦 Serviço: relatoUsuarioService
 * Define funções para consumir os endpoints da entidade Relato de Usuário na API.
 * Utiliza a instância global de Axios configurada em `api.js`
 */

/** 🔍 Lista todos os relatos de usuários cadastrados */
export const listarRelatos = () => api.get('/relatousuario');

/** 🔍 Busca um relato específico pelo ID */
export const buscarRelatoPorId = (id) => api.get(`/relatousuario/${id}`);

/** 📝 Cria um novo relato de usuário */
export const criarRelato = (dados) => api.post('/relatousuario', dados);

/** ✏️ Atualiza um relato de usuário existente pelo ID */
export const atualizarRelato = (id, dados) => api.put(`/relatousuario/${id}`, dados);

/** 🗑️ Remove um relato de usuário existente pelo ID */
export const deletarRelato = (id) => api.delete(`/relatousuario/${id}`);
