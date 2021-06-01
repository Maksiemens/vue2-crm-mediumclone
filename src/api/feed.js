import axios from '@/api/axios';

const loadFeed = (apiUrl) => {
  return axios.get(apiUrl);
};

export default {
  loadFeed,
};
