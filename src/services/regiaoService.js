import api from './api';

export const listarRegioes = () => api.get('/regiao');
export const buscarRegiaoPorId = (id) => api.get(`/regiao/${id}`);
export const criarRegiao = (dados) => api.post('/regiao', dados);
export const atualizarRegiao = (id, dados) => api.put(`/regiao/${id}`, dados);
export const deletarRegiao = (id) => api.delete(`/regiao/${id}`);
