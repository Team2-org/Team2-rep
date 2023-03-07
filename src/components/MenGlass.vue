<template>
  <div>
    <h1>Men's Products</h1>
    <ul v-if="products != null">
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - ${{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script>
// import productsData from "../../public/products.json";
export default {
  created() {
    this.products = this.$route.query.products;
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      products: [],
    };
  },
};
</script>
