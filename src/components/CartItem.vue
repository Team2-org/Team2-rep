<template>
  <div class="cartCard">
    <div class="img-cart">
      <img :src="item.image" class="cartImage" alt="..." />
    </div>
    <h5 class="cart-title">{{ item.name }}</h5>
    <p class="cart-text">{{ item.price }} sek</p>
    <p>{{ product.quantity }}</p>
    <p>Total cost: {{ item_cost.toFixed(2) }}</p>
    <p>{{ product_total }}</p>
    <button class="addToCartButton" @click="addToCart()">
      <ion-icon name="caret-up-outline"></ion-icon>
    </button>
    <button class="removeFromCartButton" @click="removeFromCart()">
      <ion-icon name="caret-down-outline"></ion-icon>
    </button>
  </div>
</template>

<script>
export default {
  //   data() {
  // //     ["item", "active"];
  //     return {
  //       item: "",
  //     };

  props: ["item"],
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.item);
    },
    removeFromCart() {
      this.$store.commit("removeFromCart", this.item);
    },
  },
  computed: {
    // items() {
    //   return this.$store.getters.cartItems;
    // },
    // product_total() {
    //   return this.$store.getters.productQuantity(this.item);
    // },
    description() {
      return this.item.description;
      // 1.33
    },
    item_cost() {
      return this.item.price * this.item.quantity;
    },
  },
};
</script>
