import api from './api';

export const listarUsuarios = () => api.get('/user');
export const buscarUsuarioPorId = (id) => api.get(`/user/${id}`);
export const criarUsuario = (dados) => api.post('/user', dados);
export const atualizarUsuario = (id, dados) => api.put(`/user/${id}`, dados);
export const deletarUsuario = (id) => api.delete(`/user/${id}`);
