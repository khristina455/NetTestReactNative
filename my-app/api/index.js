import axios from 'axios';

export const axiosInstance = axios.create({ baseURL: 'http://192.168.102.64:8080/api' });
