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
                <router-link class="link" :to="{ path: `/products/${item.id}` }"
                  ><h5
                    class="card-title"
                    id="card-title"
                    style="cursor: pointer"
                    @click="redirectToProduct"
                  >
                    {{ item.name }}
                  </h5></router-link
                >
                <!-- <h6 class="card-subtitle mb-2 text-muted">
                  {{ item.brand }}
                </h6> -->
                <p class="card-text">
                  {{ item.price }} Sek
                  <span
                    ><ion-icon
                      name="trash-outline"
                      id="trash"
                      style="cursor: pointer"
                      @click="removeFromWishlist(item)"
                    ></ion-icon
                  ></span>
                </p>
                <button @click="addToCart" id="toCartBtn">Add to cart</button>
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
    // removeFromWishlist() {
    //   localStorage.removeItem("item");
    // },
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
  height: 70%;
  background: #fff;
  overflow-y: scroll;
}

.card {
  margin: 0;
  padding: 1vw;
  padding-top: 1vw;
  width: 50%;
  height: 29vh;
  overflow: hidden;
  border: none;
  border-radius: 0;
  justify-content: center;
}
.row {
  justify-content: center;
  width: 100%;
}
.card-body {
  padding-top: 1.5vh;
  justify-content: center;
  width: 100%;
}

.link {
  color: black;
  text-decoration: none;
}

a:hover {
  color: #4a6f54;
  font-style: italic;
}

.img-card img {
  /* padding: 10px; */
  height: 15vh;
  display: block;
  width: 100%;
  overflow: hidden;
  border-radius: 0;
}

.img-wrapper {
  display: flex;
  justify-content: center;
}
.img-card {
  position: relative;
  width: max-content;
  width: 20vw;
}
.card-title {
  font-size: 0.7em;
  margin: 0;
}
.card-text {
  font-size: 0.6em;
  margin: 0;
}
#trash {
  padding-left: 2vw;
  font-size: 1.1em;
  position: absolute;
  bottom: 5.5vh;
  right: 1.5vw;
}
#toCartBtn {
  background-color: #86b393;
  width: 80%;
  border: none;
  border-radius: 5px;
  margin-bottom: 2vh;
  margin-top: 1vh;
  font-size: 0.6em;
  position: absolute;
  bottom: 0;
  margin-right: 7vw;
  justify-content: center;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

@media screen and (max-width: 940px) {
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--lightestgrey);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #c2c2c2;
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #86b393;
  }

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
