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

            <i class="bi bi-suit-heart px-2" style="font-size: 1.5rem"></i>
          </div>
        </div>

        <div class="card-body">
          <h5 class="card-title">{{ item.name }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ item.brand }}</h6>
          <p class="card-text">{{ item.price }} Sek</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.fetchList();
  },
  data() {
    return {
      items: null,
    };
  },
  methods: {
    async fetchList() {
      const res = await fetch("../../public/products.json");

      const val = await res.json();

      this.items = val;
    },
  },
};
</script>
<style scoped>
.card {
  margin: 3%;
}
.img-card img {
  padding: 10px;
}
.icon {
  display: flex;
  justify-content: space-between;
}
.row {
  justify-content: center;
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
  color: red;
}
.fetch-card {
  background-color: #fff3f3;
}
</style>
