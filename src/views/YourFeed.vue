<template>
  <div class="your-feed-page">
    <app-banner></app-banner>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link active">
                  Your Feed
                </a>
              </li>

              <li class="nav-item">
                <a href="" class="nav-link">
                  Global Feed
                </a>
              </li>

              <li class="nav-item ng-hide">
                <a href="" class="nav-link active">
                  <i class="ion-pound"></i>
                </a>
              </li>
            </ul>
          </div>
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

export default {
  name: 'AppYourFeed',

  components: {
    AppFeed,
    AppSidebarTags,
    AppBanner,
  },

  data: () => ({
    apiUrl: '/articles/feed',
  }),
};
</script>
