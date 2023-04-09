<template>
  <div class="fetch-card">
    <div class="row" v-if="items !== null">
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: null,
      //   items: items.map((item) => ({ ...item, isActive: false })),

      active: false,
      wishlist: [],
      item: "",
    };
  },
  mounted() {
    this.fetchCards();
  },
  methods: {
    async fetchCards() {
      const res = await fetch("../../public/products.json");
      const val = await res.json();
      this.items = val.filter((p) => p.gender === "unisex");
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

@media only screen and (max-width: 1000px) {
  .row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap; /* allow items to wrap to a new line when screen size is reduced */
    margin: 0 auto; /* center the row horizontally */
  }
}
@media only screen and (max-width: 430px) {
  .row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap; /* allow items to wrap to a new line when screen size is reduced */
    margin: 0 auto; /* center the row horizontally */
  }
}
@media only screen and (max-width: 360px) {
  .row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap; /* allow items to wrap to a new line when screen size is reduced */
    margin: 0 auto; /* center the row horizontally */
  }
}
</style>
