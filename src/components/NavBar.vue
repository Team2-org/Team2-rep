<script setup>
import { RouterLink, RouterView } from "vue-router";
import EmptyModal from "./EmptyModal.vue";
import CartAccordion from "./CartAccordion.vue";
import WishlistAccordion from "./WishlistAccordion.vue";
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
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Spectacular</h5>
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
                Category
              </a>
              <ul class="dropdown-menu">
                <!-- <li><a class="dropdown-item" href="#">Men</a></li> -->
                <li class="dropdown-item" @click="showMenProducts">Men</li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li><a class="dropdown-item" href="#">Women</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">Unisex</a>
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
        >Spectacular</RouterLink
      >
      <!-- <a class="navbar-brand mx-auto" style="font-size: 2rem" href="#"
        >Brand Name</a -->

      <div class="nav-icon">
        <button
          class="bi bi-person px-2"
          @click="openLmodal"
          role="link"
          style="font-size: 1.5rem"
        ></button>
        <EmptyModal
          :title="'Log In'"
          :is-open="modalIsOpen"
          @close="closeModal"
        >
        </EmptyModal>

        <button
          class="bi bi-suit-heart px-2"
          style="font-size: 1.5rem"
          @click="toggleWishlist"
          role="link"
        ></button>
        <WishlistAccordion
          v-if="isWishlistExpanded"
          :title="'Wishlist'"
          :toggle-wishlist="isWishlistExpanded"
          @toggle="toggleWishlist"
        >
        </WishlistAccordion>

        <button
          class="bi bi-cart2 px-2"
          @click="toggleAccordion"
          role="link"
          style="font-size: 1.5rem"
        ></button>
        <CartAccordion
          v-if="isExpanded"
          :title="'Shopping cart'"
          :is-expanded="isExpanded"
          @toggle="toggleAccordion"
        >
          <!-- Cart content goes here -->
        </CartAccordion>
      </div>
    </div>
  </nav>
  <RouterView />
</template>
<style scoped>
.navbar .navbar-toggler {
  border-color: #fff3f3;
}
.navbar-brand {
  font-family: "Italiana", serif;
}
.navbar,
bg-body-tertiary,
fixed-top {
  position: sticky;
  border-bottom: 0.5px solid grey;
}
.bi,
bi-cart2,
px-2 {
  background-color: transparent;
  border: transparent;
}
.offcanvas-start {
  background-color: #fff3f3;
}
.dropdown-menu {
  background-color: #fff3f3;
}
</style>

<script>
import productsData from "../../public/products.json";;

export default {
  data() {
    return {
      modalIsOpen: false,
      isExpanded: false,
      isWishlistExpanded: false,
    };
  },
  methods: {
    openLmodal() {
      this.modalIsOpen = true;
    },
    closeModal() {
      this.modalIsOpen = false;
    },
    toggleAccordion() {
      this.isExpanded = !this.isExpanded;
    },
    toggleWishlist() {
      this.isWishlistExpanded = !this.isWishlistExpanded;
    },

    showMenProducts() {
      const maleProducts = productsData.filter((p) => p.gender === "male");
      this.$router.push({
        path: "/products/men",
        query: { products: maleProducts },
      });
    },
  },

  components: { EmptyModal, CartAccordion, WishlistAccordion },
};
</script>
