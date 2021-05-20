import axios from '@/api/axios';

const register = (credentials) => {
  return axios.post('/users', { user: credentials });
};

const login = (credentials) => {
  return axios.post('/users/login', { user: credentials });
};

const loadCurrentUser = () => {
  return axios.get('/user');
};

export default {
  register,
  login,
  loadCurrentUser
};
