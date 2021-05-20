import axios from 'axios';
import * as persistanceStorage from '@/helpers/persistanceStorage';


axios.defaults.baseURL = 'https://conduit.productionready.io/api';
axios.interceptors.request.use((config) => {
  const token = persistanceStorage.getItem('token');
  const authToken = token ? `Token ${token}` : '';
  config.headers.Authorization = authToken;
  return config;
});

export default axios;
