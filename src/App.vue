<script setup>
import { RouterLink, RouterView } from "vue-router";
import CompFooter from "./components/CompFooter.vue";
import NavBar from "./components/NavBar.vue";
import FilterSection from "./components/FilterSection.vue";
</script>

<template>

<NavBar />
  <FilterSection />

  <RouterView />
  <CompFooter />
</template>



<style scoped></style>
