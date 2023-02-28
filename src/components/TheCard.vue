<template>
  <div class="fetch-card">
    <div class="row" v-if="items !== null">
      <div
        class="card"
        style="width: 18rem"
        v-for="item in items"
        :key="item.id"
      >
        <div class="img-wrapper">
          <div class="img-card">
            <img :src="item.image" class="card-img-top" alt="..." />

            <i
              class="bi bi-suit-heart px-2"
              @click="buttonClick"
              :style="{
                color: active ? 'red' : 'black',
              }"
            ></i>
          </div>
        </div>

        <div class="card-body">
          <!-- <h5
            class="card-title"
            style="cursor: pointer"
            @click="redirectToProduct"
          >
            {{ item.name }}
          </h5> -->
          <router-link :to="{ path: `/products/${item.id}` }"
            ><h5 class="card-title">
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
import items from "../../public/products.json";
export default {
  //   mounted() {
  //     this.fetchList();
  //   },
  data() {
    return {
      //   items: null,
      items,

      active: false,
    };
  },
  methods: {
    // async fetchList() {
    //   const res = await fetch("../../public/products.json");

    //   const val = await res.json();

    //   this.items = val;
    // },
    buttonClick() {
      this.active = !this.active;
    },
    // redirectToProduct() {
    //   this.$router.push({
    //     path: "/product",
    //   });
    // },
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
}
.fetch-card {
  background-color: #fff3f3;
}
.bi-suit-heart {
  font-size: 1.5rem;
}
.row {
  width: 100%;
}
.card-title {
  color: black;
}
</style>
