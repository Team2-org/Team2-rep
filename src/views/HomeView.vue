<script setup>
import TheCard from "../components/TheCard.vue";
import HeroImage from "../components/HeroImage.vue";

import FilterSection from "../components/FilterSection.vue";
</script>

<template>
  <HeroImage />
  <FilterSection />
  <TheCard />
</template>
<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped></style>
