import axios from 'axios';

const baseURL = 'https://64d7183d2a017531bc12f8c8.mockapi.io/';
const token = JSON.parse(localStorage.getItem('jwtToken'));

const api = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token?.jwtToken}`,
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    "Content-type": "application/json"
  }
});

export default api;
