import api from './api';

/**
 * 📦 Serviço: eventoNaturalService
 * Define funções para consumir os endpoints da entidade Evento Natural na API.
 * Utiliza a instância global de Axios configurada em `api.js`
 */

/** 🔍 Lista todos os eventos naturais cadastrados */
export const listarEventosNaturais = () => api.get('/eventonatural');

/** 🔍 Busca um evento natural específico pelo ID */
export const buscarEventoPorId = (id) => api.get(`/eventonatural/${id}`);

/** 📝 Cria um novo evento natural */
export const criarEvento = (dados) => api.post('/eventonatural', dados);

/** ✏️ Atualiza um evento natural existente pelo ID */
export const atualizarEvento = (id, dados) => api.put(`/eventonatural/${id}`, dados);

/** 🗑️ Remove um evento natural existente pelo ID */
export const deletarEvento = (id) => api.delete(`/eventonatural/${id}`);
