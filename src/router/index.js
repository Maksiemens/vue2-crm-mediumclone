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
  ],
})

export default router;
