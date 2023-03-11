<template>
  <!-- <h2>Cart</h2> -->
  <div class="container">
    <div
      class="wishlistCard"
      v-for="item in wishlist"
      :key="item.id"
      :item="item"
    >
      <div class="imgWrapper">
        <img :src="item.image" class="wishlistImage" alt="..." />
      </div>
      <div class="wishlistBody">
        <!-- <h5 class="wishlist-title">{{ item.name }} {{ item.id }}</h5> -->
        <router-link class="card-heading" :to="{ path: `/products/${item.id}` }"
          ><h5 @click="loadNextPage" class="wishlist-title">
            {{ item.name }}
          </h5></router-link
        >

        <p class="wishlist-text">
          {{ item.price }} sek<span>
            <!-- {{ product_total }} -->
            <button
              class="WishlistRemove"
              @click="RemoveItemFromWishlist(item)"
            >
              <ion-icon name="trash-outline"></ion-icon></button
          ></span>
        </p>
      </div>
      <div class="button">
        <button class="addtocart" @click="addToCart(item)">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.wishlistarray = JSON.parse(localStorage.getItem("wishlistarray"));
  },
  data() {
    ["item", "active"];
    return {
      item: "",
    };
  },

  methods: {
    // RemoveItemFromCart(item) {
    //   this.$store.commit("RemoveItemFromCart", item);
    // },
    RemoveItemFromWishlist(item) {
      this.$store.commit("RemoveItemFromWishlist", item);
    },
    addToCart(item) {
      this.$store.commit("addToCart", item);
    },

    loadNextPage() {
      window.scrollTo(0, 0);
    },
  },
  computed: {
    wishlist() {
      return this.$store.getters.wishlistItems;
    },
    // product_total() {
    //   return this.$store.getters.productQuantity(this.item);
    // },
  },
};
</script>

<style>
.container {
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
}
.wishlistCard {
  display: grid;
  grid-template-columns: card;
  border: none;
  width: 98%;
  height: 33vh;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 10px;
}
.imgWrapper {
  text-align: center;
  height: 17vh;
  overflow: hidden;
}
.wishlistImage {
  width: 95%;
  justify-content: center;
  padding: 2px;
}

.wishlist-title {
  font-size: 0.8em;
  padding: 1.5vh 0 0 0;
  margin: 5px 0 0 2px;
  color: black;
  text-decoration: none;
}
.card-heading {
  text-decoration: none;
}
a:hover {
  font-style: italic;
}

.wishlist-text {
  font-size: 0.8em;
  margin: 0 0 0 2px;
}
.wishlistBody {
  height: 20;
}
.button {
  display: flex;
  justify-content: center;
  /* position: absolute;
  bottom: 2px; */
}
.addtocart {
  background-color: rgba(134, 179, 147, 57%);
  width: 95%;
  font-family: Quicksand;
  font-size: 0.8em;
  border-radius: 5px;
  border: none;
  text-align: center;
  justify-self: center;
}
.WishlistRemove {
  background-color: white;
  border: none;
  padding-bottom: 0;
}
</style>
