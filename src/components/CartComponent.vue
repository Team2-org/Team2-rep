<template>
  <!-- <h2>Cart</h2> -->
  <div class="cartCard" v-for="item in items" :key="item.id" :item="item">
    <img :src="item.image" class="cartImage" alt="..." />

    <div class="cartBody">
      <router-link class="cart-title" :to="{ path: `/products/${item.id}` }"
        ><h5 @click="loadNextPage" class="cart-title">
          {{ item.name }}
        </h5></router-link
      >
      <p class="cart-text">{{ item.price }} sek</p>
      <!-- {{ product_total }} -->
      <p class="qty-text">{{ item.quantity }} pcs</p>
      <button class="CartRemove" @click="RemoveItemFromCart(item)">
        <ion-icon name="trash-outline"></ion-icon>
      </button>
    </div>

    <!-- <button class="addToCartButton" @click="addToCart()">
      <ion-icon name="caret-up-outline"></ion-icon>
    </button>
     <button class="removeFromCartButton" @click="removeFromCart()">
      <ion-icon name="caret-down-outline"></ion-icon>
    </button>-->
  </div>
</template>

<script>
export default {
  data() {
    ["item", "active"];
    return {
      item: "",
    };
  },
  methods: {
    //   addToCart() {
    //     this.$store.commit("addToCart", this.item);
    //   },
    removeFromCart() {
      this.$store.commit("removeFromCart", this.item);
    },
    RemoveItemFromCart(item) {
      this.$store.commit("RemoveItemFromCart", item);
    },
    loadNextPage() {
      window.scrollTo(0, 0);
    },
  },
  computed: {
    items() {
      return this.$store.getters.cartItems;
    },
    // product_total() {
    //   return this.$store.getters.productQuantity(this.item);
    // },
  },
  //   component: { CartItem },
};
</script>

<style>
.cartCard {
  width: 100%;
  border-bottom: solid 1px black;
  display: flex;
}
.cartImage {
  width: 45%;
  padding: 10px 10px 10px 0px;
}

.cartBody {
  width: 55%;
  padding: 10px 5px;
}
.cart-title {
  font-size: 1em;
  font-family: Quicksand;
  color: black;
  margin: 0;
  text-decoration: none;
}
.cart-text {
  font-size: 0.6em;
  margin: 0;
  padding-top: 2vh;
}
.qty-text {
  font-size: 0.6em;
  margin: 0;
}

/* #cartTrash {
  padding-left: 2vw;
  font-size: 1.1em;
  position: absolute;
  bottom: 5.5vh;
  right: 1.5vw;
} */
.CartRemove {
  width: 30px;
  background-color: white;
  border: none;
  margin-left: auto;
  font-size: 1.1em;
  display: flex;
  /* justify-content: end; */
  align-items: end;
}
.addToCartButton {
  width: 25px;
  /* position: absolute;
  top: 0;
  right: 0; */
  background-color: #fff3f3;
  border: none;
}
.removeFromCartButton {
  width: 25px;
  /* position: absolute;
  top: 0;
  right: 0; */
  background-color: #fff3f3;
  border: none;
}
</style>
