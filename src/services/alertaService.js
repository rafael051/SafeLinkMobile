import api from './api';

/**
 * 📦 Serviço: alertaService
 * Define funções para consumir os endpoints da entidade Alerta na API.
 * Utiliza a instância global de Axios configurada em `api.js`
 */

/** 🔍 Lista todos os alertas cadastrados */
export const listarAlertas = () => api.get('/alerta');

/** 🔍 Busca um alerta específico pelo ID */
export const buscarAlertaPorId = (id) => api.get(`/alerta/${id}`);

/** 📝 Cria um novo alerta */
export const criarAlerta = (dados) => api.post('/alerta', dados);

/** ✏️ Atualiza um alerta existente pelo ID */
export const atualizarAlerta = (id, dados) => api.put(`/alerta/${id}`, dados);

/** 🗑️ Remove um alerta existente pelo ID */
export const deletarAlerta = (id) => api.delete(`/alerta/${id}`);
