<template>
  <div class="feed">
    <div v-if="isLoading">
      Loading...
    </div>

    <div v-if="error">
      error...
    </div>

    <div v-if="data">
      <div
        class="article-preview"
        v-for="article of data.articles"
        :key="article.slug"
      >
        <div class="article-meta">
          <router-link
            :to="{
              name: 'user-profile',
              params: { slug: article.author.username },
            }"
          >
            <img :src="article.author.image" />
          </router-link>

          <div class="info">
            <router-link
              class="author"
              :to="{
                name: 'user-profile',
                params: { slug: article.author.username },
              }"
            >
              {{ article.author.username }}
            </router-link>
            <span class="date">
              {{ article.createdAt }}
            </span>
          </div>

          <div class="pull-xs-right">
            <button class="btn btn-sm btn-outline-primary">
              <i class="ion-heart"></i>
              Add to favorites
            </button>
          </div>
        </div>

        <router-link
          class="preview-link"
          :to="{
            name: 'article',
            params: { slug: article.slug },
          }"
        >
          <h1>{{ article.title }}</h1>
          <p>{{ article.description }}</p>
          <span>Read more...</span>
        </router-link>
      </div>

      <app-pagination
        :total="data.articlesCount"
        :current-page="currentPage"
        :url="baseUrl"
      ></app-pagination>
    </div>
  </div>
</template>

<script>
import { stringify, parseUrl } from 'query-string';
import { LIMIT } from '@/helpers/constants';
import { mapGetters } from 'vuex';
import * as fromFeed from '@/store/modules/feed';
import AppPagination from '@/components/Pagination';

export default {
  name: 'AppFeed',

  components: {
    AppPagination,
  },

  props: {
    apiUrl: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    tagsUrl: '/tags/dragons',
  }),

  watch: {
    currentPage() {
      this.loadFeed();
    },
  },

  computed: {
    ...mapGetters({
      isLoading: [fromFeed.getterTypes.isLoading],
      data: [fromFeed.getterTypes.data],
      error: [fromFeed.getterTypes.error],
    }),
    currentPage() {
      return +this.$route.query.page || 1;
    },
    baseUrl() {
      return this.$route.path;
    },
    offset() {
      return this.currentPage * LIMIT - LIMIT;
    },
  },

  methods: {
    async loadFeed() {
      try {
        const parsedUrl = parseUrl(this.apiUrl);
        const stringifiedParams = stringify({
          ...parsedUrl.query,
          limit: LIMIT,
          offset: this.offset,
        });
        const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
        await this.$store.dispatch(fromFeed.actionTypes.loadFeed, { apiUrl: apiUrlWithParams });
      } catch (error) {
        console.error(error);
      }
    },
  },

  mounted() {
    this.loadFeed();
  },
};
</script>
