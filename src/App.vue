<script setup>
<<<<<<< HEAD
import { RouterLink, RouterView } from "vue-router";
import CompFooter from "./components/CompFooter.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <CompFooter />
=======
import NavBar from "./components/NavBar.vue";
import FilterSection from "./components/FilterSection.vue";
</script>

<template>
  <NavBar />
  <FilterSection />
>>>>>>> 1eb4384662b38ba5a6e42a418292fb17eadf1be1
</template>

<style scoped></style>
