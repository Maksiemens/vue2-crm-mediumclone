import axios from '@/api/axios';

const loadTags = () => {
  return axios.get('/tags');
};

export default {
  loadTags,
};
