import axios from '@/api/axios';

const loadFeed = () => {
  return axios.get('/articles');
};

export default {
  loadFeed,
};
