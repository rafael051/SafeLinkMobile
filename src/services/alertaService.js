import api from './api';

export const listarAlertas = () => api.get('/alerta');
export const buscarAlertaPorId = (id) => api.get(`/alerta/${id}`);
export const criarAlerta = (dados) => api.post('/alerta', dados);
export const atualizarAlerta = (id, dados) => api.put(`/alerta/${id}`, dados);
export const deletarAlerta = (id) => api.delete(`/alerta/${id}`);
