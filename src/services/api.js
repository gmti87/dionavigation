import axios from 'axios';

const api = axios.create({
  // rodar no android ip rede maquina
  // rodar no pc ip da rede 192.168.1.2:3000
  baseURL: 'http://localhost:3000',
});

export default api;
