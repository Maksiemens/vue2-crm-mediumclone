<template>
  <div class="home-page">
    <!-- Splash banner that only shows when not logged in -->
    <app-banner></app-banner>

    <div class="container page">
      <div class="row">
        <!-- Main view - contains tabs & article list -->
        <div class="col-md-9">
          <!-- Tabs for toggling between feed, article lists -->
          <app-feed-toggle></app-feed-toggle>

          <app-feed :api-url="apiUrl"></app-feed>
          <!-- List the current articles -->
          <!-- <article-list class="ng-isolate-scope">
            <div class="article-preview ng-hide">
              Loading articles...
            </div>
            <div class="article-preview">
              No articles are here... yet.
            </div> -->

          <!-- <list-pagination class="ng-isolate-scope ng-hide"
              ><nav>
                <ul class="pagination"></ul>
              </nav>
            </list-pagination> -->
          <!-- </article-list> -->
        </div>

        <!-- Sidebar where popular tags are listed -->
        <div class="col-md-3">
          <app-sidebar-tags></app-sidebar-tags>
        </div>

        <!-- End the row & container divs -->
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
