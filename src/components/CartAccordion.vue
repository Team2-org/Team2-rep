<script setup></script>

<template>
  <div class="wrapper">
    <div>
      <i class="bi bi-cart2 px-2" @click="toggleAccordion"></i>
    </div>
    <div class="cart-container" v-if="isExpanded" :class="{ show: isExpanded }">
      <div class="cart-content">
        <p @click="toggleAccordion" class="cont-shop">
          <strong> ⏎ </strong>
          Continue shopping
        </p>
      </div>
      <div class="cart-title">{{ title }}</div>

      <div class="items-qty">You have {{}} items in your cart</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    isExpanded: Boolean,
  },
  methods: {
    toggleAccordion() {
      this.$emit("toggle");
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: absolute;
}

.cart-container {
  position: absolute;
  display: flex;
  right: 0;
  transform: translateX(100%);
  transition: transform 0.1s ease-out;
  transition-delay: 0.2s;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: transparent;
  border-radius: 0.5rem 0rem 0rem 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;

  /* display: none; */
}

.cart-container.show {
  display: block;
  justify-content: flex-start;
  float: right;
  transform: translateX(33%);
  transition: transform 0.1s ease-in;
  top: 1.125rem;
  opacity: 1;
  height: 80vh;
  width: 30vw;
  padding-left: 1.5rem;
}

.cart-content {
  font-size: 1.5rem;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
}

.cont-shop {
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid black;
  font-weight: 200;
  padding: 0.5rem;

  width: 80vw;
}
.cart-title {
  display: flex;
  justify-content: flex-start;

  font-size: 1.5rem;
  font-weight: 200;
  display: flex;
  justify-content: top;
  padding-top: -5rem;
  padding-left: 1.5rem;
  padding-bottom: 1rem;
}

.items-qty {
  border-bottom: 1px solid black;
  font-weight: 100;
}

.bi,
bi-cart2,
px-2 {
  display: none;
}
</style>
