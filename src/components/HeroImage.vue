<script setup></script>

<script>
export default {
  data() {
    return {
      man: "img/man-930397_1280glasses.jpg",
    };
  },
};
</script>

<template>
  <div>
    <img class="hero-image" :src="man" alt="Cool guy with glasses" />
  </div>
  <div>
    <h1 class="hero-text1" style="position: absolute; z-index: 100">
      Please buy our glasses 🥺 <br />
    </h1>
    <h2 class="hero-text2" style="position: absolute; z-index: 100">
      😩PLEASE!
    </h2>
  </div>
</template>

<style scoped>
/* Desktop */
.hero-image {
  background-color: pink;
  position: relative;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  background-position: center;
  z-index: 100;
}

.hero-text1 {
  position: absolute;
  top: 30%;
  left: 25%;
  transform: translate(-50%, -50%);
  color: pink;
  font-size: 3rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
.hero-text2 {
  position: absolute;
  top: 40%;
  left: 35%;
  transform: translate(-50%, -50%);
  color: pink;
  font-size: 5rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
/* Tablet */
@media only screen and (max-width: 1000px) {
  .hero-image {
    height: 90vh;
  }
  .hero-text1 {
    display: none;
  }
  .hero-text2 {
    display: none;
  }
}

@media only screen and (max-width: 770px) {
  .hero-image {
    height: 80vh;
  }
  .hero-text1 {
    display: none;
  }
  .hero-text2 {
    display: none;
  }
}
@media only screen and (max-width: 700px) {
  .hero-image {
    height: 70vh;
  }
  .hero-text1 {
    display: none;
  }
  .hero-text2 {
    display: none;
  }
}
@media only screen and (max-width: 550px) {
  .hero-image {
    height: 60vh;
  }
  .hero-text1 {
    display: none;
  }
  .hero-text2 {
    display: none;
  }
}
/* Phone */
@media only screen and (max-width: 400px) {
  .hero-image {
    height: 50vh;
  }
}
</style>
