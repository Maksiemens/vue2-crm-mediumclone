<template>
  <div class="home-page ng-scope">
    <!-- Splash banner that only shows when not logged in -->
    <!-- <div class="banner" show-authed="false" style="display: none;">
      <div class="container">
        <h1 class="logo-font ng-binding" ng-bind="::$ctrl.appName | lowercase">
          conduit
        </h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div> -->

    <div class="container page">
      <div class="row">
        <!-- Main view - contains tabs & article list -->
        <div class="col-md-9">
          <app-feed :api-url="apiUrl"></app-feed>
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
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <a class="tag-default tag-pill">‌</a>
            </div>

            <div>
              Loading tags...
            </div>

            <div class="post-preview">
              No tags are here... yet.
            </div>
          </div>
        </div>

        <!-- End the row & container divs -->
      </div>
    </div>
  </div>
</template>

<script>
import AppFeed from '@/components/Feed';
import * as fromFeed from '@/store/modules/feed';

export default {
  name: 'AppHome',
  components: {
    AppFeed,
  },
  data: () => ({
    apiUrl: '/articles',
  }),

  async mounted() {
    try {
      await this.$store.dispatch(fromFeed.actionTypes.loadFeed);
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
