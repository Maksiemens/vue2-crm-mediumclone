import Vue from 'vue';
import VueRouter from 'vue-router';
import GlobalFeed from '@/views/GlobalFeed';
import YourFeed from '@/views/YourFeed';
import TagFeed from '@/views/TagFeed';
import Auth from '@/views/Auth';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
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
      path: '/',
      name: 'global-feed',
      component: GlobalFeed,
    },
    {
      path: '/your-feed',
      name: 'your-feed',
      component: YourFeed,
    },
    {
      path: '/tags/:slug',
      name: 'tag',
      component: TagFeed,
    },
    {
      path: '/articles/new',
      name: 'create-article',
      component: GlobalFeed,
    },
    {
      path: '/articles/:slug',
      name: 'article',
      component: GlobalFeed,
    },
    {
      path: '/articles/:slug/edit',
      name: 'edit-article',
      component: GlobalFeed,
    },

    {
      path: '/settings',
      name: 'settings',
      component: GlobalFeed,
    },

    {
      path: '/profiles/:slug',
      name: 'user-profile',
      component: GlobalFeed,
    },

    {
      path: '/profiles/:slug/favorites',
      name: 'user-profile-favorites',
      component: GlobalFeed,
    },
  ],
})

export default router;
