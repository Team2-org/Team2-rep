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
        <!--Put items-container from json here?-->
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
