import axios from 'axios';

/**
 * 🌐 Instância global do Axios para requisições HTTP
 * Define a URL base da API do sistema SafeLink
 * Altere o valor de `baseURL` conforme o ambiente (produção, desenvolvimento, etc)
 */
const api = axios.create({
    baseURL: 'https://sua-api-safelink.com.br/api', // 🔧 Substitua pela URL real da sua API
});

export default api;
a