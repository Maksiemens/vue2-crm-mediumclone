<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view></router-view>
  </div>
</template>

<style lang="scss"></style>

<script>
import AppNavbar from '@/components/Navbar';
import * as fromAuth from '@/store/modules/auth';

export default {
  name: 'App',

  components: {
    AppNavbar,
  },

  async mounted() {
    try {
      await this.$store.dispatch(fromAuth.actionTypes.loadCurrentUser);
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
