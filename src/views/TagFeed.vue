<template>
  <div class="your-feed-page">
    <app-banner></app-banner>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <app-feed-toggle :tag-name="tagName"></app-feed-toggle>
          <app-feed :api-url="apiUrl"></app-feed>
        </div>

        <!-- Sidebar where popular tags are listed -->
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
  name: 'AppTagFeed',

  components: {
    AppFeed,
    AppSidebarTags,
    AppBanner,
    AppFeedToggle,
  },

  computed: {
    tagName() {
      return this.$route.params.slug;
    },

    apiUrl() {
      return `/articles?tag=${this.tagName}`;
    },
  },
};
</script>
