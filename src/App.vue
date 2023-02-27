<script setup>
import { RouterLink, RouterView } from "vue-router";
import CompFooter from "./components/CompFooter.vue";

import NavBar from "./components/NavBar.vue";
import CompFooter from "./components/CompFooter.vue"
</script>


<template>
  <NavBar />
    <RouterView />
  <CompFooter />
</template>

<style scoped></style>
