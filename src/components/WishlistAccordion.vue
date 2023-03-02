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
      isWishlistExpanded: true,
    };
  },
  created() {
    this.wishlist = JSON.parse(localStorage.getItem("wishlist"));
  },
  methods: {
    toggleWishlist() {
      this.isWishlistExpanded = !this.isWishlistExpanded;
      if (this.isWishlistExpanded) {
        document.body.classList.add("wishlist-expanded");
      } else {
        document.body.classList.remove("wishlist-expanded");
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: absolute;
}

.wishlist-container {
  position: fixed;
  display: block;
  right: 0;
  transform: translateX(100%); /* change to translateX(100%) */
  background-color: #fff3f3;
  border: 1px solid #ccc;
  border-radius: 0.5rem 0rem 0rem 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: transform 0.3s ease-in-out; /* add transition property */
}

.wishlist-container.show {
  margin-top: 1rem;
  display: block;
  transform: translateX(0); /* change to translateX(0) */
  height: 80vh;
  width: 30vw;
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

@media (max-width: 940px) {
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

@media (max-width: 480px) {
  .wishlist-container.show {
    width: 80vw;
    height: 80vh;
  }
  .cont-shop {
    width: 80vw;
  }
}
</style>
