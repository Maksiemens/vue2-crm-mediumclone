<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }">
        MediumClone
      </router-link>

      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link
            class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'home' }"
          >
            Home
          </router-link>
        </li>

        <!-- Show this for logged in users -->
        <template v-if="isLoggedIn">
          <li class="nav-item">
            <router-link
              class="nav-link"
              active-class="active"
              :to="{ name: 'crate-article' }"
            >
              <i class="ion-compose"></i>&nbsp;New Article
            </router-link>
          </li>

          <li class="nav-item">
            <router-link
              class="nav-link"
              active-class="active"
              :to="{ name: 'settings' }"
            >
              <i class="ion-gear-a"></i>&nbsp;Settings
            </router-link>
          </li>

          <li class="nav-item">
            <router-link
              class="nav-link"
              active-class="active"
              :to="{
                name: 'user-profile',
                params: { slug: currentUser.username },
              }"
            >
              <img class="user-pic" :src="currentUser.image" />
              &nbsp;
              {{ currentUser.username }}
            </router-link>
          </li>
        </template>

        <!-- Show this for logged out users -->
        <template v-if="isAnonymous">
          <li class="nav-item">
            <router-link
              class="nav-link"
              active-class="active"
              :to="{ name: 'login' }"
            >
              Sign in
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              active-class="active"
              :to="{ name: 'register' }"
            >
              Sign up
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss"></style>

<script>
import { mapGetters } from 'vuex';
import * as fromAuth from '@/store/modules/auth';

export default {
  name: 'AppNavbar',
  computed: {
    ...mapGetters({
      currentUser: [fromAuth.getterTypes.currentUser],
      isLoggedIn: [fromAuth.getterTypes.isLoggedIn],
      isAnonymous: [fromAuth.getterTypes.isAnonymous],
    }),
  },
};
</script>
