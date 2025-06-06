import api from './api';

export const listarPrevisoesRisco = () => api.get('/previsaorisco');
export const buscarPrevisaoPorId = (id) => api.get(`/previsaorisco/${id}`);
export const criarPrevisao = (dados) => api.post('/previsaorisco', dados);
export const atualizarPrevisao = (id, dados) => api.put(`/previsaorisco/${id}`, dados);
export const deletarPrevisao = (id) => api.delete(`/previsaorisco/${id}`);
