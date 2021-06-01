<template>
  <ul class="pagination">
    <li
      class="page-item"
      v-for="paginationPageItem of paginationPageList"
      :key="paginationPageItem.id"
      :class="{ active: currentPage === paginationPageItem.id }"
    >
      <router-link
        class="page-link"
        active-class="active"
        :to="{ path: '/tags/dragons', query: { page: paginationPageItem.id } }"
      >
        {{ paginationPageItem.label }}
      </router-link>
    </li>
  </ul>
</template>

<style scoped lang="scss"></style>

<script>
import { rangeList } from '@/helpers/utils';
import { LIMIT } from '@/helpers/constants';

export default {
  name: 'AppPagination',
  props: {
    total: {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      required: false,
      default: LIMIT,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },

  computed: {
    paginationPageList() {
      const pagesCoount = Math.ceil(this.total / this.limit);
      return rangeList(1, pagesCoount);
    },
  },
};
</script>
