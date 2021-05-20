import authApi from '@/api/auth';
import * as persistanceStorage from '@/helpers/persistanceStorage';

const state = {
  isSubmitting: false,
  isLoading: false,
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

  loadCurrentUser: '[Auth] Load Current User',
  loadCurrentUserSuccess: '[Auth] Load Current User Success',
  loadCurrentUserFailure: '[Auth] Load Current User Failure',
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

  [mutationTypes.loadCurrentUser](state) {
    state.isLoading = true;
    state.error = null;
  },
  [mutationTypes.loadCurrentUserSuccess](state, payload) {
    state.isLoading = false;
    state.currentUser = payload;
    state.isLoggedIn = true;
    state.error = null;
  },
  [mutationTypes.loadCurrentUserFailure](state, payload) {
    state.isLoading = false;
    state.isLoggedIn = false;
    state.currentUser = null;
    state.error = payload;
  },
};

export const actionTypes = {
  register: '[Auth/API] Register',

  login: '[Auth/API] Login',

  loadCurrentUser: '[Auth/API] Load Current User',
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

  async [actionTypes.loadCurrentUser](context) {
    context.commit(mutationTypes.loadCurrentUser);
    try {
      const response = await authApi.loadCurrentUser();
      context.commit(mutationTypes.loadCurrentUserSuccess, response.data.user);
    } catch (error) {
      console.error(error);
      context.commit(mutationTypes.loadCurrentUserFailure, error.response.data.errors);
      throw error;
    }
  },
};

export const getterTypes = {
  isSubmitting: '[Auth] Is Submitting',
  currentUser: '[Auth] Current User',
  isLoggedIn: '[Auth] Is Logged In',
  error: '[Auth] Error',
  isAnonymous: '[Auth] Is Anonymous',
  isLoading: '[Auth] Is Anonymous',
};
const getters = {
  [getterTypes.isLoading]: (state) => state.isLoading,
  [getterTypes.isSubmitting]: (state) => state.isSubmitting,
  [getterTypes.currentUser]: (state) => state.currentUser,
  [getterTypes.isLoggedIn]: (state) => !!state.isLoggedIn,
  [getterTypes.error]: (state) => state.error,
  [getterTypes.isAnonymous]: (state) => state.isLoggedIn === false,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
