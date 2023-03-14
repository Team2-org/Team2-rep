<script setup>
import CartComponent from "./CartComponent.vue";
</script>

<template>
  <div class="modal-overlay" v-if="isExpanded" @click="toggleAccordion"></div>
  <div class="wrapper">
    <div>
      <i class="bi bi-cart2 px-2" @click="toggleAccordion"></i>
    </div>
    <div class="cart-container" v-if="isExpanded" :class="{ show: isExpanded }">
      <div class="cart-content">
        <p @click="toggleAccordion" class="cont-shop">
          <strong>⏎ </strong>
          Continue shopping
        </p>
      </div>
      <div class="cart-title">Cart</div>

      <!-- <div class="items-qty"></div>
      <CartItem v-for="item in items" :key="item.id" :item="item"></CartItem> -->

      <div class="items-qty">
        You have {{ totalQuantity }} items in your cart
      </div>
      <!-- <CartItem v-for="item in items" :key="item.id" :item="item"></CartItem> -->

      <div class="cart-container-items">
        <CartComponent></CartComponent>
      </div>
      <section id="check-wrapper">
        <p class="shipping">Shipping: 49 sek</p>
        <!-- <div class="cost"> -->
        <h5 class="total">
          Total:
          <!-- <div class="totalCost"> -->
          <span class="totalCost">{{ cartTotal }} sek</span>
        </h5>
        <!-- </div> -->
        <!-- </div> -->
        <button type="button" class="check-btn" @click="checkOut">
          Continue to checkout
        </button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    isExpanded: Boolean,
    /* itemsInCart: Boolean, */
  },
  methods: {
    toggleAccordion() {
      this.$emit("toggle");
    },
    checkOut() {
      this.$router.push({ name: "checkout" });
    },
  },
  computed: {
    items() {
      return this.$store.getters.cartItems;
    },
    cartTotal() {
      return this.$store.getters.cartTotal;
    },
    // totalQuantity() {
    //   return this.$store.getters.totaQuantity;
    // },
  },
  components: { CartComponent },
};
</script>

<style scoped>
.modal-overlay {
  background-color: transparent;
  z-index: 10;
}
.wrapper {
  display: flex;
  justify-content: flex-end;
  right: 0;
  align-items: center;
  position: relative;
  width: 100%;
  z-index: 10;
}

.cart-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0;
  transform: translateX(0%);
  transition: transform 0.5s ease-out;
  transition-delay: 0.2s;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: transparent;
  border-radius: 0.5rem 0rem 0rem 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;

  /* display: none; */
}

.cart-container-items {
  display: block;
}

.cart-container.show {
  display: flex;
  right: -1rem;
  transform: translateX(0%);
  transition: transform 2s ease-in;
  top: 1.125rem;
  opacity: 1;
  height: 80vh;
  width: 30vw;
  padding-left: 1.5rem;
  margin-right: auto;
}

.cart-content {
  font-size: 1.5rem;
  display: flex;
  /* justify-content: flex-start; */
  cursor: pointer;
}
.cart-container-items {
  width: 100%;
  height: 80%;
  overflow-y: scroll;
}
.items {
  width: 80%;
}
.cont-shop {
  display: flex;
  justify-content: space-between;
  justify-content: flex-start;
  flex-wrap: nowrap;
  border-bottom: 1px solid black;
  font-weight: 100;
  padding: 0.5rem;
  padding-right: 8rem;
  margin-bottom: 0;
  width: 80vw;
  font-size: 1.25rem;
}
.cart-title {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 200;
  display: flex;

  font-family: italiana;
}

.items-qty {
  border-bottom: 0.5px solid black;
  font-weight: 100;
  padding-bottom: 2vh;
}

.shipping {
  font-weight: 200;
  margin-top: 1rem;
}
/* .cost {
  display: inline;
} */
.total {
  font-weight: 200;
  margin-top: 0.5rem;
}
.totalCost {
  font-weight: 200;
}
.check-btn {
  background-color: rgba(134, 179, 147, 57%);
  margin: 1rem 3rem 1rem 3rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  border: none;
}

.shipping {
  padding: 0;
  margin: 0;
}
.total {
  padding: 0;
  margin: 0;
}

/* .check-btn {
} */

#check-wrapper {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  border-top: solid 0.5px black;
}

.bi,
bi-cart2,
px-2 {
  display: none;
}

@media only screen and (max-width: 1200px) {
  .cont-shop {
    padding-right: 5rem;
  }
}

.cart-container.show {
  width: 35vw;
}

@media only screen and (max-width: 1000px) {
  .cart-container.show {
    width: 40vw;
  }
}

@media only screen and (max-width: 820px) {
  .cart-container.show {
    width: 45vw;
  }
}

@media only screen and (max-width: 775px) {
  .cart-container.show {
    width: 50vw;
  }
}
@media only screen and (max-width: 668px) {
  .cart-container.show {
    width: 50vw;
  }
  .cont-shop {
    padding-right: 0rem;
  }
}
@media only screen and (max-width: 577px) {
  .cart-container.show {
    width: 55vw;
  }
}
@media only screen and (max-width: 525px) {
  .cart-container.show {
    width: 60vw;
  }
}

@media only screen and (max-width: 475px) {
  .cart-container.show {
    width: 60vw;
  }
}
@media only screen and (max-width: 430px) {
  .cart-container.show {
    width: 65vw;
  }
}
@media only screen and (max-width: 400px) {
  .cart-container.show {
    width: 65vw;
  }
}
@media only screen and (max-width: 385px) {
  .cart-container.show {
    width: 70vw;
  }
}
</style>
