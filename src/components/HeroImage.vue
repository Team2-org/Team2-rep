<script setup></script>

<script>
/* export default {
  data() {
    return {
      ImageSource: "../assets/img/man-930397_1280glasses.jpg",
    };
  },
}; */
export default {
  methods: {
    discover() {
      window.scrollTo({
        top: 750,
        behavior: "smooth",
      });
    },
  },
};
</script>

<template>
  <div class="hero-image">
    <img
      class="hero-image2"
      src="../assets/img/ian-dooley-TT-ROxWj9nA-unsplash.jpeg"
      alt="Cool girl with
    glasses"
    />
  </div>
  <div>
    <h1 class="hero-text1" style="position: absolute; z-index: 100">
      Elevate Your Style with our Range of Fashionable Spectacle Frames<br />
    </h1>
    <button
      id="hero-btn"
      class="hero-text2"
      @click="discover"
      style="position: absolute; z-index: 100"
    >
      Discover <br />
      ⇩
    </button>
  </div>
</template>

<style scoped>
/* Desktop */
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9)),
    url("../assets/img/ian-dooley-TT-ROxWj9nA-unsplash.jpeg");
  background-color: pink;
  position: relative;
  background-attachment: sticky;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 95vh;
  object-fit: cover;
  background-position: center;
  padding: 0;
}

.hero-image2 {
  display: none;
}
.hero-text1 {
  text-align: center;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(255 243 243);
  font-size: 2.5rem;
  line-height: 3.5rem;
  letter-spacing: 0.5rem;
  font-weight: 300;
}

.hero-text2 {
  position: absolute;
  text-align: center;
  font-weight: 100;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(255 243 243);
  font-size: 2rem;
}

#hero-btn {
  background-color: transparent;
  border: transparent;
  cursor: pointer;
}
/* Tablet */
@media only screen and (max-width: 1000px) {
  .hero-image {
    height: 100vh;
  }
  .hero-text1 {
    display: inline;
    font-size: 2rem;
    line-height: 3rem;
    letter-spacing: 0.5rem;
    font-weight: 200;
  }
  .hero-text2 {
    display: inline;
  }
}

@media only screen and (max-width: 770px) {
  .hero-image {
    height: 90vh;
  }
  .hero-text1 {
    display: inline;
    font-size: 1.5rem;
    line-height: 3rem;
    letter-spacing: 0.5rem;
    font-weight: 200;
  }
  .hero-text2 {
    display: inline;
  }
}
@media only screen and (max-width: 700px) {
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
@media only screen and (max-width: 550px) {
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
/* phone */
@media only screen and (max-width: 400px) {
  .hero-image {
    height: 60vh;
  }
}
</style>
