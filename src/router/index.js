import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

// !Auth
import Auth from '@/views/Auth.vue';
// ******

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/auth',
      // name: 'auth',
      component: Auth,
      children: [
        {
          path: '',
          redirect: { name: 'register' },
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('@/views/Register.vue'),
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('@/views/Login.vue'),
        },
      ],
    },

    {
      path: '/your-feed',
      name: 'your-feed',
      component: Home,
    },
    {
      path: '/tags/:slug',
      name: 'tag',
      component: Home,
    },
    {
      path: '/articles/new',
      name: 'create-article',
      component: Home,
    },
    {
      path: '/articles/:slug',
      name: 'article',
      component: Home,
    },
    {
      path: '/articles/:slug/edit',
      name: 'edit-article',
      component: Home,
    },

    {
      path: '/settings',
      name: 'settings',
      component: Home,
    },

    {
      path: '/profiles/:slug',
      name: 'user-profile',
      component: Home,
    },

    {
      path: '/profiles/:slug/favorites',
      name: 'user-profile-favorites',
      component: Home,
    },
  ],
})

export default router;
