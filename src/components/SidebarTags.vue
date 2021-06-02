<template>
  <div class="sidebar">
    <p>Popular Tags</p>

    <div v-if="isLoading">
      Loading tags...
    </div>

    <div v-if="error">
      error...
    </div>

    {{  existingTags }}

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

    <!-- <div class="post-preview">
      No tags are here... yet.
    </div> -->
  </div>
</template>

<style scoped lang="scss"></style>

<script>
import { mapGetters } from 'vuex';
import * as fromTags from '@/store/modules/tags';

export default {
  name: 'AppSidebarTags',
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
