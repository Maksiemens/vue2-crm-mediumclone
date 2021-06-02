<template>
  <div class="home-page">
    <app-banner></app-banner>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <app-feed-toggle></app-feed-toggle>
          <app-feed :api-url="apiUrl"></app-feed>
        </div>

        <div class="col-md-3">
          <app-sidebar-tags></app-sidebar-tags>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

<script>
import AppFeed from '@/components/Feed';
import AppSidebarTags from '@/components/SidebarTags';
import AppBanner from '@/components/Banner';
import AppFeedToggle from '@/components/FeedToggle';

export default {
  name: 'AppHome',

  components: {
    AppFeed,
    AppSidebarTags,
    AppBanner,
    AppFeedToggle,
  },

  data: () => ({
    apiUrl: '/articles',
  }),
};
</script>
