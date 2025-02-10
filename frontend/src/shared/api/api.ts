import axios from 'axios';

const API_BASE_URL = import.meta.env.API_BASE_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
});

console.log(api.defaults.baseURL);

export default api;
