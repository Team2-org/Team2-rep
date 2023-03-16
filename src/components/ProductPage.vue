<script></script>
<template>
  <div class="product-source" v-if="item">
    <div id="product-page">
      <img :src="item.image" class="center" alt="glass" />
      <div class="product-details">
        <div class="product-brand">
          <h3>{{ item.name }}, {{ item.brand }}</h3>
          <h5>{{ item.price }} kr</h5>
        </div>
        <div class="product-icon">
          <!-- <i class="bi bi-suit-heart px-2" style="font-size: 1.5rem"></i> -->
          <i
            class="bi bi-suit-heart px-2"
            @click="toggleActive(item)"
            :style="{
              color: item.isActive ? 'red' : 'black',
            }"
          ></i>
          <input
            type="button"
            @click="addToCart()"
            class="card-btn"
            value="Add to cart"
          />
          <!-- <button class="productPageRemove" @click="removeFromCart()">
            <ion-icon name="trash-outline"></ion-icon>
          </button> -->
        </div>
      </div>
      <div class="product-description">
        <h4>Description</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum ut
          tempora aspernatur facilis beatae reiciendis perferendis quam iure
          vero repellat?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolore
          temporibus, qui quas magnam quidem? Sapiente perspiciatis reiciendis
          odio quod explicabo recusandae culpa possimus amet dicta error,
          repellendus sit ipsa, inventore dolore est tempora eveniet
          consequuntur hic placeat, fugiat labore?
        </p>
        <ul>
          <!-- <li>{{ item.description }}</li> -->
          <li>{{ item.color }}</li>
          <li>{{ item.material }}</li>
          <li>{{ item["frame-size"] }}</li>
          <li>{{ item.form }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;

  width: 70%;
  padding-top: 30px;
}
.card-btn {
  background-color: rgba(134, 179, 147, 57%);
  padding: 5px;
  font-family: Quicksand;
  font-size: 20px;
  border: none;
}
/* .productPageRemove {
  width: 30px;
  background-color: white;
  border: none;
} */
.product-details {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  margin-top: 20px;
}
.product-icon {
  display: flex;
  flex-direction: column;
}
.bi-suit-heart {
  margin-left: 75px;
  padding-bottom: 10px;
  font-size: 1.5rem;
}
.product-description {
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 15px;
  width: 70%;
  margin-top: 5%;
  font-family: Quicksand;
}
.product-source {
  background-color: #fff3f3;
  padding-bottom: 90px;
  padding-top: 1px;
}
#product-page {
  margin-left: 10%;
  margin-right: 10%;

  background-color: white;
}
@media only screen and (max-width: 400px) {
  .card-btn {
    padding: 3px;
    font-size: 16px;
  }
  .product-brand h3 {
    font-size: 20px;
  }
  .product-brand h5 {
    font-size: 15px;
  }
}
</style>

<script>
import items from "../../public/products.json";
// import CartComponent from "../components/CartComponent.vue";
export default {
  data() {
    props: ["item", "active"];
    return {
      item: null,
    };
  },

  created() {
    const itemId = this.$route.params.id;
    this.item = items.find((p) => p.id == itemId);
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.item);
    },
    removeFromCart() {
      this.$store.commit("removeFromCart", this.item);
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
  },
  computed: {
    items() {
      return this.$store.getters.cartItems;
    },
  },
  //   components: { CartComponent },
};
</script>
