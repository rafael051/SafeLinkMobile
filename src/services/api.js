import axios from 'axios';

const api = axios.create({
    baseURL: 'https://sua-api-safelink.com.br/api',
});

export default api;
