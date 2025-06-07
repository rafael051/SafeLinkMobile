import api from './api';

/**
 * 📦 Serviço: regiaoService
 * Define funções para consumir os endpoints da entidade Região na API.
 * Utiliza a instância global de Axios configurada em `api.js`
 */

/** 🔍 Lista todas as regiões cadastradas */
export const listarRegioes = () => api.get('/regiao');

/** 🔍 Busca uma região específica pelo ID */
export const buscarRegiaoPorId = (id) => api.get(`/regiao/${id}`);

/** 📝 Cria uma nova região */
export const criarRegiao = (dados) => api.post('/regiao', dados);

/** ✏️ Atualiza uma região existente pelo ID */
export const atualizarRegiao = (id, dados) => api.put(`/regiao/${id}`, dados);

/** 🗑️ Remove uma região existente pelo ID */
export const deletarRegiao = (id) => api.delete(`/regiao/${id}`);
