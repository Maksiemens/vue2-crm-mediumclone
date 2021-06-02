<template>
  <div class="home-page ng-scope">
    <!-- Splash banner that only shows when not logged in -->
    <app-banner></app-banner>

    <div class="container page">
      <div class="row">
        <!-- Main view - contains tabs & article list -->
        <div class="col-md-9">
          <!-- Tabs for toggling between feed, article lists -->
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

<script>
import AppFeed from '@/components/Feed';
import AppSidebarTags from '@/components/SidebarTags';
import AppBanner from '@/components/Banner';

export default {
  name: 'AppHome',
  components: {
    AppFeed,
    AppSidebarTags,
    AppBanner,
  },
  data: () => ({
    apiUrl: '/articles',
  }),
};
</script>
