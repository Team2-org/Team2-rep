<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <nav
    class="navbar bg-body-tertiary fixed-top"
    style="background-color: #fff3f3"
  >
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Brand Name</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <RouterLink class="nav-link active" aria-current="page" to="/"
                >Home</RouterLink
              >
              <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="#">Link</a> -->
              <RouterLink
                class="nav-link active"
                aria-current="page"
                to="/about"
                >About</RouterLink
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex mt-3" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <RouterLink
        class="navbar-brand mx-auto"
        style="font-size: 2rem"
        aria-current="page"
        to="/"
        >Brand Name</RouterLink
      >
      <!-- <a class="navbar-brand mx-auto" style="font-size: 2rem" href="#"
        >Brand Name</a -->

      <div class="nav-icon">
        <router-link to="/about" custom v-slot="{ navigate }">
          <i
            class="bi bi-person px-2"
            @click="navigate"
            role="link"
            style="font-size: 1.5rem"
          ></i>
        </router-link>
        <router-link to="/about" custom v-slot="{ navigate }">
          <i
            class="bi bi-suit-heart px-2"
            style="font-size: 1.5rem"
            @click="navigate"
            role="link"
          ></i>
        </router-link>
        <router-link to="/about" custom v-slot="{ navigate }">
          <i
            class="bi bi-cart2 px-2"
            style="font-size: 1.5rem"
            @click="navigate"
            role="link"
          ></i>
        </router-link>
        <!-- <i class="bi bi-person px-2" style="font-size: 1.5rem"></i> -->
        <!-- <i class="bi bi-suit-heart px-2" style="font-size: 1.5rem"></i> -->
        <!-- <i class="bi bi-cart2 px-2" style="font-size: 1.5rem"></i> -->
      </div>
    </div>
  </nav>
  <RouterView />
</template>
<style scoped>
.navbar .navbar-toggler {
  border-color: #fff3f3;
}
</style>
