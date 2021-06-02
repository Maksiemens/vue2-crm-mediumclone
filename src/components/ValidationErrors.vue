<template>
  <div class="validation-errors">
    <ul class="error-messages">
      <li
        class="error-messages__item"
        v-for="errorMessage of errorMessages"
        :key="errorMessage"
      >
        {{ errorMessage }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppValidationErrors',

  props: {
    error: {
      type: Object,
      required: true,
    },
  },

  computed: {
    errorMessages() {
      return Object.keys(this.error).map((item) => {
        const messages = this.error[item].join(', ');
        return `${item} ${messages}`;
      });
    },
  },
};
</script>

<style scoped lang="scss"></style>
