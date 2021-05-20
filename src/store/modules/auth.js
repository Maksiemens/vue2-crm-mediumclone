import authApi from '@/api/auth';
import * as persistanceStorage from '@/helpers/persistanceStorage';

const state = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  error: null,
};

const mutationTypes = {
  register: '[Auth] Register',
  registerSuccess: '[Auth] Register Success',
  registerFailure: '[Auth] Register Failure',

  login: '[Auth] Login',
  loginSuccess: '[Auth] Login Success',
  loginFailure: '[Auth] Login Failure',
};

export const actionTypes = {
  register: '[Auth/API] Register',

  login: '[Auth/API] Login',
};

const mutations = {
  [mutationTypes.register](state) {
    state.isSubmitting = true;
    state.error = null;
  },
  [mutationTypes.registerSuccess](state, payload) {
    state.isSubmitting = false;
    state.currentUser = payload;
    state.isLoggedIn = true;
    state.error = null;
  },
  [mutationTypes.registerFailure](state, payload) {
    state.isSubmitting = false;
    state.error = payload;
  },

  [mutationTypes.login](state) {
    state.isSubmitting = true;
    state.error = null;
  },
  [mutationTypes.loginSuccess](state, payload) {
    state.isSubmitting = false;
    state.currentUser = payload;
    state.isLoggedIn = true;
    state.error = null;
  },
  [mutationTypes.loginFailure](state, payload) {
    state.isSubmitting = false;
    state.error = payload;
  },
};

const actions = {
  async [actionTypes.register](context, credentials) {
    context.commit(mutationTypes.register);
    try {
      const response = await authApi.register(credentials);
      context.commit(mutationTypes.registerSuccess, response.data.user);
      persistanceStorage.setItem('token', response.data.user.token);
    } catch (error) {
      console.error(error);
      context.commit(mutationTypes.registerFailure, error.response.data.errors);
      throw error;
    }
  },

  async [actionTypes.login](context, credentials) {
    context.commit(mutationTypes.login);
    try {
      const response = await authApi.login(credentials);
      context.commit(mutationTypes.loginSuccess, response.data.user);
      persistanceStorage.setItem('token', response.data.user.token);
    } catch (error) {
      console.error(error);
      context.commit(mutationTypes.loginFailure, error.response.data.errors);
      throw error;
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
