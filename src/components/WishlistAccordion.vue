<script setup>
import CompWelcome from "./CompWelcome.vue";
</script>
<template>
  <div
    class="modal-overlay"
    v-if="isWishlistExpanded"
    @click="toggleWishlist"
  ></div>
  <div class="wrapper">
    <div
      class="wishlist-container"
      v-if="isWishlistExpanded"
      :class="{ show: isWishlistExpanded }"
    >
      <p id="comp"><CompWelcome /></p>
      <div class="wishlist-content">
        <p @click="toggleWishlist" class="cont-shop">
          <strong> ⏎ </strong>
          Continue shopping
        </p>
      </div>
      <div class="wishlist-title">{{ title }}</div>
      <div class="wishlist-items-container">
        <div v-if="item === null"><p>Du har inget i varukorgen.</p></div>
        <!-- <div class="fetch-card"> -->
        <WishlistItems></WishlistItems>
        <div class="row" v-if="items !== null">
          <div class="card" v-for="item in wishlist" :key="item.id">
            <div class="img-wrapper">
              <div class="img-card">
                <img :src="item.image" class="card-img-top" alt="..." />
              </div>
            </div>
            <div class="card-body">
              <router-link
                class="card-heading"
                :to="{ path: `/products/${item.id}` }"
                ><h5 class="card-title">
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
    <!-- </div>-->
  </div>
</template>

<script>
import WishlistItems from "./WishlistItems.vue";
export default {
  props: {
    title: String,
  },
  data() {
    return {
      isWishlistExpanded: !this.isWishlistExpanded,
    }; // Sätter man den som false by default försvinner den.
  },

  //Page shows from the top
  created() {
    this.wishlist = JSON.parse(localStorage.getItem("wishlist"));
  },
  methods: {
    toggleWishlist() {
      this.$emit("toggle");
    },
    loadNextPage() {
      window.scrollTo(0, 0);
    },
    // removeFromWishlist() {
    //   localStorage.removeItem("item");
    // },
  },
  components: { WishlistItems },
};
</script>

<style scoped>
.modal-overlay {
  background-color: transparent;
  z-index: 10;
}
.wrapper {
  position: absolute;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  z-index: 10;
}

.wishlist-container {
  position: absolute;
}
/*!!!!!!The transition refuses to work. Don't know what to change. */
.wishlist-container.show {
  transform: translateX(0%);
  height: 80vh;
  width: 34.8vw;
  background-color: white;
  border: 1px solid #ccc;
  border-top: transparent;
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
  justify-content: space-between;
  justify-content: flex-start;
  flex-wrap: nowrap;
  border-bottom: 1px solid black;
  font-weight: 100;
  padding: 0.5rem;
  padding-right: 0rem;
  margin-bottom: 0;
  width: 80vw;
  font-size: 1.25rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.wishlist-title {
  display: flex;
  position: relative;
  justify-content: center;
  font-family: italiana;
  font-size: 1.5rem;
  font-weight: 200;
  margin-top: 0;
  padding-top: 0;
}
.wishlist-items-container {
  font-family: Quicksand;
  height: 70%;
  width: 98%;
  background: #fff;
  overflow-y: scroll;
  overflow-x: hidden;
  justify-content: center;
  padding-bottom: 0;
  margin-bottom: 0;
  border-bottom: solid black 0.5px;
}

.card {
  display: flex;
  margin: 0;
  padding: 1vw;
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

.card-img-top {
  /* height: 15vh; */
  /* display: block; */
  width: 90%;
  padding: 2px;
  overflow: hidden;
  border-radius: 0;
  display: flex;
  justify-content: center;
}

/* .img-wrapper {
  display: flex;
  justify-content: center;
} */
.img-card {
  position: relative;
  width: max-content;
  width: 20vw;
  justify-content: center;
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
  /* padding-left: 3vw; */
  font-size: 1.3em;
  position: absolute;
  bottom: 5.5vh;
  right: 0vw;
}
#toCartBtn {
  background-color: #86b393;
  width: 100%;
  height: fit-content;
  border: none;
  border-radius: 5px;
  margin-bottom: 2vh;
  margin-top: 1vh;
  font-size: 0.6em;
  /* position: absolute;
  bottom: 0; */
  /* margin-right: 7vw; */
  justify-content: center;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
#comp {
  font-size: 14px;
  margin-right: 100%;
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

  /*   .wishlist-container.show {
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
} */

  @media only screen and (max-width: 1200px) {
    .cont-shop {
      padding-right: 5rem;
    }
  }

  .wishlist-container.show {
    width: 35vw;
  }

  @media only screen and (max-width: 1000px) {
    .wishlist-container.show {
      width: 40vw;
    }
  }

  @media only screen and (max-width: 820px) {
    .wishlist-container.show {
      width: 45vw;
    }
  }

  @media only screen and (max-width: 775px) {
    .wishlist-container.show {
      width: 50vw;
    }
  }
  @media only screen and (max-width: 668px) {
    .wishlist-container.show {
      width: 50vw;
    }
    .cont-shop {
      padding-right: 0rem;
    }
  }
  @media only screen and (max-width: 577px) {
    .wishlist-container.show {
      width: 55vw;
    }
  }
  @media only screen and (max-width: 525px) {
    .wishlist-container.show {
      width: 60vw;
    }
  }

  @media only screen and (max-width: 475px) {
    .wishlist-container.show {
      width: 60vw;
    }
  }
  @media only screen and (max-width: 430px) {
    .wishlist-container.show {
      width: 65vw;
    }
  }
  @media only screen and (max-width: 400px) {
    .wishlist-container.show {
      width: 65vw;
    }
  }
  @media only screen and (max-width: 385px) {
    .wishlist-container.show {
      width: 70vw;
    }
  }
}
</style>
