import feedApi from '@/api/feed';

const state = {
  isLoading: false,
  data: null,
  error: null,
};

const mutationTypes = {
  loadFeed: '[Feed] Load Feed',
  loadFeedSuccess: '[Feed] Load Feed Success',
  loadFeedFailure: '[Feed] Load Feed Failure',
};
const mutations = {
  [mutationTypes.loadFeed](state) {
    state.isLoading = true;
    state.data = null;
    state.error = null;
  },
  [mutationTypes.loadFeedSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
    state.error = null;
  },
  [mutationTypes.loadFeedFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
};

export const actionTypes = {
  loadFeed: '[Feed/API] Load Feed',
};
const actions = {
  async [actionTypes.loadFeed](context, { apiUrl }) {
    context.commit(mutationTypes.loadFeed);
    try {
      const response = await feedApi.loadFeed(apiUrl);
      context.commit(mutationTypes.loadFeedSuccess, response.data);
    } catch (error) {
      console.error(error);
      context.commit(mutationTypes.loadFeedFailure, error.response.data.errors);
      throw error;
    }
  },
};

export const getterTypes = {
  isLoading: '[Feed] Is Loading',
  data: '[Feed] Feed Data',
  error: '[Feed] Error',
};
const getters = {
  [getterTypes.isLoading]: (state) => state.isLoading,
  [getterTypes.data]: (state) => state.data,
  [getterTypes.error]: (state) => state.error,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
