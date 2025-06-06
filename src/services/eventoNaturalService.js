import api from './api';

export const listarEventosNaturais = () => api.get('/eventonatural');
export const buscarEventoPorId = (id) => api.get(`/eventonatural/${id}`);
export const criarEvento = (dados) => api.post('/eventonatural', dados);
export const atualizarEvento = (id, dados) => api.put(`/eventonatural/${id}`, dados);
export const deletarEvento = (id) => api.delete(`/eventonatural/${id}`);
