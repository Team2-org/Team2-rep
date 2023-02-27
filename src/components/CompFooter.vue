<template>
  <footer class="compFooter">
    <div class="leftContainer">
      <div>
        <div class="iconContainer">
          <a href="https://www.instagram.com/" target="_blank">
            <img src="../assets/img/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <img src="../assets/img/facebook.png" alt="Facebook" />
          </a>
        </div>
      </div>
      <div class="infoContainer">
        <div class="footerInfo">
          <h3>{{ Text1 }}</h3>
          <p>Om oss</p>
          <p>Kontakta oss</p>
        </div>
        <div class="footerInfo">
          <h3>{{ Text2 }}</h3>
          <p>Köpvilkor</p>
          <p>Garantier</p>
        </div>
        <div class="footerInfo">
          <h3>{{ Text3 }}</h3>
          <p>Köpvilkor</p>
          <p>Garantier</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      Text1: "Om XXX",
      Text2: "Kontakt",
      Text3: "Kontakt",
    };
  },
};
</script>

<style scoped>
.compFooter {
  display: flex;
  height: 15%;
  background-color: white;
}
.leftContainer {
  display: flex;
  align-items: center;
  gap: 50px;
  padding-left: 50px;
  width: 60%;
}

.leftContainer img {
  height: 30px;
  width: 30px;
}
.rightContainer {
  width: 40%;
}

.footerInfo {
  display: flex;
  flex-direction: column;
}

.iconContainer {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.infoContainer {
  display: flex;
  gap: 100px;
  flex-wrap: wrap;
}
</style>
