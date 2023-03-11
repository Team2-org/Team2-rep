<script setup>
import CompFooter from "./components/CompFooter.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
  <CompFooter />
</template>

<style scoped></style>

<script>
export default {
  mounted() {
    this.$store.commit("updateCartFromLocalStorage");
    this.$store.commit("updateWishlistFromLocalStorage");
  },
};
</script>
