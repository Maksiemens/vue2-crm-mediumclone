<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view></router-view>
  </div>
</template>

<style lang="scss"></style>

<script>
import AppNavbar from '@/components/Navbar';

export default {
  name: 'App',
  components: {
    AppNavbar,
  },
};
</script>
