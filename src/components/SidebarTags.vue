<template>
  <div class="sidebar">
    <p>Popular Tags</p>
    <app-loading v-if="isLoading"></app-loading>
    <app-error-message v-if="error"></app-error-message>

    <div v-if="data" class="tag-list">
      <router-link
        class="tag-default tag-pill"
        v-for="(tag, index) of data.tags"
        :key="index"
        :to="{
          name: 'tag',
          params: { slug: tag },
        }"
      >
        {{ tag }}
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

<script>
import { mapGetters } from 'vuex';
import * as fromTags from '@/store/modules/tags';
import AppLoading from '@/components/Loading';
import AppErrorMessage from '@/components/ErrorMessage';

export default {
  name: 'AppSidebarTags',

  components: {
    AppLoading,
    AppErrorMessage
  },

  computed: {
    ...mapGetters({
      isLoading: [fromTags.getterTypes.isLoading],
      data: [fromTags.getterTypes.data],
      existingTags: [fromTags.getterTypes.existingTags],
      error: [fromTags.getterTypes.error],
    }),
  },

  methods: {
    async loadTags() {
      try {
        await this.$store.dispatch(fromTags.actionTypes.loadTags);
      } catch (error) {
        console.error(error);
      }
    },
  },

  mounted() {
    this.loadTags();
  },
};
</script>
