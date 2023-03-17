<template>
  <div class="aboutGlasses">
    <div class="lineContainer">
      <div class="line">
        <h2 class="headLine">ABOUT SPECTACULAR GROUP</h2>
      </div>
    </div>
    <h5 class="glassesContainer">
      Spectacular Group is one of the leading players in the optics industry<br />
      in Europe, offering unique solutions in both Eye Health and Eye Fashion<br />
      with a wide range of products tailored to customers' different lifestyles.
    </h5>
    <div class="text">
      <h5 class="imgText">
        Spectacular Group is one of the leading players in the optics industry
        in Europe, offering unique solutions in both Eye Health and Eye Fashion
        with a wide range of products tailored to customers' different
        lifestyles and eye health needs. The group is located in the Nordic
        region, has around 3,000 employees and a total turnover of approximately
        SEK 4 billion. The group has about 500 stores operated under the brands
        Spectacular, Ai Eyewear, and Profil Optik in Denmark. Through
        digitalization, subscription offerings, and other innovative concepts,
        Spectacular Group has achieved growth and profitability development that
        is among the highest in Europe. Our customers are always our focus, and
        we have a clear integrated sustainability perspective throughout our
        value chain. Spectacular was named Sweden's most sustainable optician in
        the Sustainable Brand Index 2022.<br /><br />
        At Spectacular, we take the time for you, we see you, and we want to do
        everything we can to help you find the right glasses and lenses for all
        your needs. With licensed opticians who ensure your overall eye health,
        individually tailored quality lenses, a wide range of products, and our
        smart Lifestyle subscription that makes it easier than ever to have
        glasses and lenses. Come in and try everything from the latest trends to
        the glasses for your sport. You can book your eye examination here on
        spectacular.se.
      </h5>
    </div>
    <div></div>
  </div>
</template>

<style scoped>
.aboutGlasses {
  background-color: #fff3f3;
}
.headLine {
  padding-top: 1%;
}
.glassesContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1%;
  padding-bottom: 1%;
}
.text {
  display: flex;
  justify-content: center;
  align-items: center;
  /* Glasses picture in AboutView */
  background-image: url("../assets/img/Glasses.jpeg");
  background-size: cover;
  min-height: 100vh;
  padding: 0 20%;
}
.imgText {
  color: black;
  padding: 20px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
.line {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid black;
  width: 50%;
}
.lineContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
