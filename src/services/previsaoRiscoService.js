import api from './api';

/**
 * 📦 Serviço: previsaoRiscoService
 * Define funções para consumir os endpoints da entidade Previsão de Risco na API.
 * Utiliza a instância global de Axios configurada em `api.js`
 */

/** 🔍 Lista todas as previsões de risco cadastradas */
export const listarPrevisoesRisco = () => api.get('/previsaorisco');

/** 🔍 Busca uma previsão de risco específica pelo ID */
export const buscarPrevisaoPorId = (id) => api.get(`/previsaorisco/${id}`);

/** 📝 Cria uma nova previsão de risco */
export const criarPrevisao = (dados) => api.post('/previsaorisco', dados);

/** ✏️ Atualiza uma previsão de risco existente pelo ID */
export const atualizarPrevisao = (id, dados) => api.put(`/previsaorisco/${id}`, dados);

/** 🗑️ Remove uma previsão de risco existente pelo ID */
export const deletarPrevisao = (id) => api.delete(`/previsaorisco/${id}`);
