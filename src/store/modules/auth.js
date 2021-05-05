import authApi from '@/api/auth';

const state = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  error: null,
};

const mutations = {
  register(state) {
    state.isSubmitting = true;
    state.error = null;
  },
  registerSuccess(state, payload) {
    state.isSubmitting = false;
    state.currentUser = payload;
    state.isLoggedIn = true;
    state.error = null;
  },
  registerFailure(state, payload) {
    state.isSubmitting = false;
    state.error = payload;
  },
};

const actions = {
  async register(context, credentials) {
    context.commit('register');
    try {
      const response = await authApi.register(credentials);
      context.commit('registerSuccess', response.data.user);
    } catch (error) {
      console.error(error);
      context.commit('registerFailure', error.response.data.errors);
      throw error;
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
