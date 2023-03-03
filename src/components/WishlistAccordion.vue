<template>
  <div class="wrapper">
    <div
      class="wishlist-container"
      v-if="isWishlistExpanded"
      :class="{ show: isWishlistExpanded }"
    >
      <div class="wishlist-content">
        <p @click="toggleWishlist" class="cont-shop">
          <strong> ⏎ </strong>
          Continue shopping
        </p>
      </div>
      <div class="wishlist-title">{{ title }}</div>

      <div class="wishlist-items-container">
        <!-- <div v-if="item === null"><p>Du har inget i varukorgen.</p></div> -->
        <div class="fetch-card">
          <div class="row" v-if="items !== null">
            <div class="card" v-for="item in wishlist" :key="item.id">
              <div class="img-wrapper">
                <div class="img-card">
                  <img :src="item.image" class="card-img-top" alt="..." />
                </div>
              </div>

              <div class="card-body">
                <h5
                  class="card-title"
                  id="card-title"
                  style="cursor: pointer"
                  @click="redirectToProduct"
                >
                  {{ item.name }}
                </h5>

                <h6 class="card-subtitle mb-2 text-muted">
                  {{ item.brand }}
                </h6>
                <p class="card-text">{{ item.price }} Sek</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  data() {
    return {
      isWishlistExpanded: !this.isWishlistExpanded,
    }; // Sätter man den som false by default försvinner den.
  },
  created() {
    this.wishlist = JSON.parse(localStorage.getItem("wishlist"));
  },
  methods: {
    toggleWishlist() {
      this.$emit("toggle");
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
}

.wishlist-container {
  position: absolute;
}
/*!!!!!!The transition refuses to work. Don't know what to change. */
.wishlist-container.show {
  transform: translateX(0%);
  height: 80vh;
  width: 30vw;
  background-color: #fff3f3;
  border: 1px solid #ccc;
  border-radius: 0.5rem 0rem 0rem 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  top: 1.125rem;
  right: -8.3rem;
}

.wishlist-content {
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
  font-size: medium;
  padding: 0.5rem;
  width: 30vw;
}
.wishlist-title {
  display: flex;
  position: relative;
  justify-content: center;
  font-family: italiana;
  font-size: 2rem;
  font-weight: 200;
}
.wishlist-items-container {
  font-family: Quicksand;
  height: 75%;
  background: #fff;
  overflow-y: auto;
}

.card {
  margin: 3%;
  width: 8rem;
  height: 10vw;
}
.row {
  justify-content: center;
}
.img-card img {
  padding: 10px;
  height: 100px;
  display: block;
  /* width: 270px; */
}

.img-wrapper {
  display: flex;
  justify-content: center;
}
.img-card {
  position: relative;

  width: max-content;
}

@media screen and (max-width: 940px) {
  .wishlist-container.show {
    height: 80vh;
    width: 40vw;
  }

  .cont-shop {
    font-weight: 200;
    font-size: medium;
    width: 40vw;
  }
}

@media screen and (max-width: 530px) {
  .wishlist-container.show {
    width: 80vw;
    height: 80vh;
  }
  .cont-shop {
    width: 80vw;
  }
}
@media screen and (max-width: 358px) {
  .wishlist-container.show {
    width: 90vw;
    height: 80vh;
  }
  .cont-shop {
    width: 80vw;
  }
}
</style>
