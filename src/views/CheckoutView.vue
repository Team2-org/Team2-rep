<template>
  <div class="bar-top">
    <span id="bar-title">Checkout</span>
  </div>
  <div class="checkout-background">
    <div id="your-cart">1.Your cart</div>
    <div class="your-cart-container">
      <div class="your-cart-items">
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
  created() {
    this.wishlist = JSON.parse(localStorage.getItem("wishlist"));
  },
};
</script>

<style scoped>
.bar-top {
  width: 100vw;
  height: 80px;
  background-color: white;
}
#bar-title {
  font-family: italiana;
  font-size: 1.5rem;
  display: flex;
  justify-content: flex-start;
  margin-left: 50px;
  margin-top: 50px;
  transition: ease all 0.2s;
}
.checkout-background {
  background-color: #fff3f3;
  width: 100vw;
  height: 100%;
  transition: ease all 0.2s;
}
#your-cart {
  display: flex;
  justify-content: flex-start;
  transition: ease all 0.2s;
  padding: 1rem 3vw 0;
}
.your-cart-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;
  height: 90vh;
  margin: 0 auto;
  margin-bottom: 3rem;
  background-color: white;
}

@media screen and (max-width: 430px) {
  #bar-title {
    margin-left: 0;
  }
}

.card {
  margin: 0;
  width: 50%;
  height: 50vh;
  overflow: hidden;
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
  height: 30vh;
  display: grid;
  grid-auto-rows: auto;
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
  width: 30vw;
  box-sizing: border-box;
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

  right: 1.5vw;
}
</style>
