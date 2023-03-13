<template>
  <nav>
    <div>Welcome {{ username }}!</div>
  </nav>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: false,
    },
  },
};
</script>

<style>
.welcome-message {
  font-weight: bold;
}
</style>
