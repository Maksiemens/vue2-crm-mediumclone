<template>
  <div>
    {{ message }}
  </div>
</template>

<style scoped lang="scss"></style>

<script>
export default {
  name: 'AppErrorMessage',

  props: {
    message: {
      type: String,
      required: false,
      default: 'Something went wrong...',
    },
  },
};
</script>

