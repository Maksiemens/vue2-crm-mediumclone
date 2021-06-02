<template>
  <div class="feed-toggle">
    <ul class="nav nav-pills outline-active">
      <li v-if="isLoggedIn" class="nav-item">
        <router-link
          class="nav-link"
          :class="{ active: routeName === 'your-feed' }"
          :to="{ name: 'your-feed' }"
        >
          Your Feed
        </router-link>
      </li>

      <li class="nav-item">
        <router-link
          class="nav-link"
          :class="{ active: routeName === 'home' }"
          :to="{ name: 'home' }"
        >
          Global Feed
        </router-link>
      </li>

      <li v-if="tagName" class="nav-item">
        <router-link
          class="nav-link"
          :class="{ active: routeName === 'tag' }"
          :to="{ name: 'tag' }"
        >
          <i class="ion-pound"></i>
          {{ tagName }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss"></style>

<script>
import { mapGetters } from 'vuex';
import * as fromAuth from '@/store/modules/auth';

export default {
  name: 'AppFeedToggle',

  props: {
    tagName: {
      type: String,
      required: false,
    },
  },

  computed: {
    ...mapGetters({
      isLoggedIn: [fromAuth.getterTypes.isLoggedIn],
    }),
    routeName() {
      return this.$route.name;
    },
  },
};
</script>
