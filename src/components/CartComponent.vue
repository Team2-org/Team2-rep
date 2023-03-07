<template>
  <h2>Cart</h2>
  <div class="cartCard" v-for="item in items" :key="item.id" :item="item">
    <div class="img-cart">
      <img :src="item.image" class="cartImage" alt="..." />
    </div>
    <h5 class="cart-title">{{ item.name }}</h5>
    <p class="cart-text">{{ item.price }} sek</p>
    <!-- {{ product_total }} -->
    <p class="qty-text">{{ item.quantity }} pcs</p>
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
  //   methods: {
  //     addToCart() {
  //       this.$store.commit("addToCart", this.item);
  //     },
  //     removeFromCart() {
  //       this.$store.commit("removeFromCart", this.item);
  //     },
  //   },
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
  width: 20vw;
}
.cartImage {
  width: 20vw;
}
.cart-title {
  font-size: 0.7em;
  margin: 0;
}
.cart-text {
  font-size: 0.6em;
  margin: 0;
}
.qty-text {
  font-size: 0.6em;
  margin: 0;
}

#cartTrash {
  padding-left: 2vw;
  font-size: 1.1em;
  position: absolute;
  bottom: 5.5vh;
  right: 1.5vw;
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
