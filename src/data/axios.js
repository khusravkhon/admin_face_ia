import axios from 'axios';

const baseURL = 'http://192.168.35.46:5257/api';
const token = JSON.parse(localStorage.getItem('jwtToken'));

const api = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token?.jwtToken}`,
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache'
  }
});

export default api;
