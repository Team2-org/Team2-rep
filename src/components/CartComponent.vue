<template>
  <div class="cartCard" v-for="item in items" :key="item.id" :item="item">
    <div class="cartImageWrapper">
      <img :src="item.image" id="cartImage" alt="..." />
    </div>

    <div class="cartBody">
      <router-link class="cart-title" :to="{ path: `/products/${item.id}` }"
        ><h5 @click="loadNextPage" class="cart-title">
          {{ item.name }}
        </h5></router-link
      >
      <p class="cart-text">{{ item.price }} sek</p>
      <div class="addRemovePcs">
        <p class="qty-text">{{ item.quantity }}</p>
        <div class="addRemove">
          <ion-icon name="caret-up-outline" @click="addToCart(item)"></ion-icon>
          <ion-icon
            name="caret-down-outline"
            @click="removeFromCart(item)"
          ></ion-icon>
        </div>
      </div>
      <button class="CartRemove" @click="RemoveItemFromCart(item)">
        <ion-icon name="trash-outline"></ion-icon>
      </button>
    </div>
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
    addToCart(item) {
      this.$store.commit("addToCart", item);
    },
    removeFromCart(item) {
      this.$store.commit("removeFromCart", item);
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
  },
};
</script>

<style>
.cartCard {
  width: 100%;
  border-bottom: solid 1px black;
  display: flex;
}
.cartImageWrapper {
  display: flex;
}
#cartImage {
  width: 20vw;
  object-fit: cover;
  padding: 10px 10px 10px 0px;
  display: flex;
  align-self: center;
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
  padding-top: 2vh;
}
.cart-text {
  font-size: 0.8em;
  margin: 0;
  padding-top: 2vh;
  display: flex;
}
.qty-text {
  font-size: 0.8em;
  margin: 0;
  padding-top: 7px;
  padding-right: 3px;
}
.addRemovePcs {
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  padding-top: 2vh;
}
.addRemove {
  display: flex;
  flex-direction: column;
}
.CartRemove {
  width: 30px;
  background-color: white;
  border: none;
  margin-left: auto;
  font-size: 1.1em;
  display: flex;
  align-items: end;
}

@media (max-width: 400px) {
  .CartRemove {
    color: rgba(255, 255, 255, 0);
  }
}
.addToCartButton {
  width: 25px;
  background-color: #fff3f3;
  border: none;
}
.removeFromCartButton {
  width: 25px;
  background-color: #fff3f3;
  border: none;
}
</style>
