<script setup>
import FilterSection from "./FilterSection.vue";
</script>
<template>
  <filter-section @all-filters="filterItems" />
  <div class="fetch-card">
    <div class="row">
      <!-- v-if="filteredData !== null" -->
      <div
        class="card"
        style="width: 18rem"
        v-for="item in items"
        :key="item.id"
        :item="item"
      >
        <div class="img-wrapper">
          <div class="img-card">
            <img :src="item.image" class="card-img-top" alt="..." />

            <i
              class="bi bi-suit-heart px-2"
              @click="toggleActive(item)"
              :style="{
                color: item.isActive ? 'red' : 'black',
              }"
            ></i>
          </div>
        </div>

        <div class="card-body">
          <router-link
            class="card-heading"
            :to="{ path: `/products/${item.id}` }"
            ><h5 @click="loadNextPage" class="card-title">
              {{ item.name }}
            </h5></router-link
          >

          <h6 class="card-subtitle mb-2 text-muted">
            {{ item.brand }}
          </h6>
          <p class="card-text">{{ item.price }} Sek</p>
        </div>
        <!-- <button @click="addToWishlist(item)">wishlist</button> -->
        <!-- <button @click="RemoveItemFromWishlist(item)">remove</button> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: FilterSection,
  data() {
    return {
      selectedItems: [],
      items: null,
      //   items: items.map((item) => ({ ...item, isActive: false })),

      active: false,
      //   wishlist: [],
      item: "",
    };
  },
  mounted() {
    this.fetchCards();
  },
  methods: {
    async fetchCards() {
      //   const res = await fetch("../../public/products.json");
      const res = await fetch("/products.json");
      const val = await res.json();
      this.items = val;
    },
    toggleActive(item) {
      item.isActive = !item.isActive;
      if (item.isActive) {
        this.$store.commit("addToWishlist", item);
      }
      if (!item.isActive) {
        this.$store.commit("RemoveItemFromWishlist", item);
      }
    },
    loadNextPage() {
      window.scrollTo(0, 0);
    },
    addToWishlist(item) {
      this.$store.commit("addToWishlist", item);
    },
    // RemoveItemFromWishlist(item) {
    //   this.$store.commit("RemoveItemFromWishlist", item);
    // },
    // this puts yellow in the selectedItems-list in data
    filterItems(allFilters) {
      this.selectedItems = allFilters;
      this.selectedItems.forEach((filter) => filter.toLowerCase());
      console.log(this.selectedItems);
    },
  },
  computed: {
    filteredData() {

      // const data = this.selectedItems
      //   ? this.items.filter((item) => item.color === this.selectedItems)
      //   : this.items;
      //   return console.log(data);

         return this.items.filter((item) =>
        item.color.includes(this.selectedItems)
      );
      },
  },
};
</script>
<style scoped>
.card {
  margin: 3%;
}
.row {
  justify-content: center;
}
.img-card img {
  padding: 10px;
  height: 200px;
  width: 270px;
}

.img-wrapper {
  display: flex;
  justify-content: center;
}
.img-card {
  position: relative;

  width: max-content;
}
.img-card img {
  display: block;
}
.img-card .bi-suit-heart {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: black;
  font-size: 1.5rem;
}

.fetch-card {
  background-color: #fff3f3;
}

.row {
  width: 100%;
}
.card-title {
  color: black;
}
.card-heading {
  text-decoration: none;
}
</style>
