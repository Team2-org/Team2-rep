<template>
  <div>
    <div class="row" v-if="items !== null">
      <div
        class="card"
        style="width: 18rem"
        v-for="item in items"
        :key="item.id"
      >
        <div class="img-card">
          <img :src="item.image" class="card-img-top" alt="..." />
        </div>

        <div class="card-body">
          <div>
            <div class="icon">
              <h5 class="card-title">{{ item.brand }}</h5>
              <i class="bi bi-suit-heart px-2" style="font-size: 1.5rem"></i>
            </div>

            <p class="card-text">{{ item.price }}</p>
          </div>
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
      console.log(val);
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
</style>
