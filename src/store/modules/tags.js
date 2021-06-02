import tagsApi from '@/api/tags';

const state = {
  isLoading: false,
  data: null,
  error: null,
};

const mutationTypes = {
  loadTags: '[Tags] Load Tags',
  loadTagsSuccess: '[Tags] Load Tags Success',
  loadTagsFailure: '[Tags] Load Tags Failure',
};
const mutations = {
  [mutationTypes.loadTags](state) {
    state.isLoading = true;
    state.data = null;
    state.error = null;
  },
  [mutationTypes.loadTagsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
    state.error = null;
  },
  [mutationTypes.loadTagsFailure](state, payload) {
    state.isLoading = false;
    state.data = null;
    state.error = payload;
  },
};

export const actionTypes = {
  loadTags: '[Tags/API] Load Tags',
};
const actions = {
  async [actionTypes.loadTags](context) {
    context.commit(mutationTypes.loadTags);
    try {
      const response = await tagsApi.loadTags();
      context.commit(mutationTypes.loadTagsSuccess, response.data);
    } catch (error) {
      console.error(error);
      context.commit(mutationTypes.loadTagsFailure, error.response.data.errors);
      throw error;
    }
  },
};

export const getterTypes = {
  isLoading: '[Tags] Is Loading',
  data: '[Tags] Tags Data',
  existingTags: '[Tags] Existing Tags Data',
  error: '[Tags] Error',
};
const getters = {
  [getterTypes.isLoading]: (state) => state.isLoading,
  [getterTypes.data]: (state) => state.data,
  [getterTypes.error]: (state) => state.error,
  [getterTypes.existingTags]: (state) => state.data?.tags.filter((tag) => tag.length),
};

export default {
  state,
  mutations,
  actions,
  getters,
};
