<template>
  <div class="home">

    AppFeed
  </div>
</template>

<script>

export default {
  name: 'AppFeed',
  props: {
    apiUrl: {
      type: String,
      required: true,
    }

  },

  data: () => ({
    email: '',
    password: '',
  }),
};
</script>
