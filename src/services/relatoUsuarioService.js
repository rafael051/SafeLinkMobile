import api from './api';

export const listarRelatos = () => api.get('/relatousuario');
export const buscarRelatoPorId = (id) => api.get(`/relatousuario/${id}`);
export const criarRelato = (dados) => api.post('/relatousuario', dados);
export const atualizarRelato = (id, dados) => api.put(`/relatousuario/${id}`, dados);
export const deletarRelato = (id) => api.delete(`/relatousuario/${id}`);
