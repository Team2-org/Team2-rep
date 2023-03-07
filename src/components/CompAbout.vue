<template>
  <div class="aboutGlasses">
    <div class="lineContainer">
      <div class="line">
        <h2 class="headLine">OM SPECTACULAR GROUP</h2>
      </div>
    </div>
    <h5 class="glassesContainer">
      Spectacular Group är en av Europas ledande aktör inom optikbranschen<br />
      och erbjuder unika lösningar inom både Eye Health och Eye Fashion<br />
      med ett brett sortiment som utgår ifrån kundens olika livsstilar.
    </h5>
    <div class="text">
      <h5 class="imgText">
        Spectacular Group är en av Europas ledande aktör inom optikbranschen och
        erbjuder unika lösningar inom både Eye Health och Eye Fashion med ett
        brett sortiment som utgår ifrån kundens olika livsstilar och behov av
        ögonhälsa. Koncernen finns i Norden, har cirka 3000 medarbetare och en
        total omsättning på cirka 4 miljarder SEK. Totalt har koncernen cirka
        500 butiker som drivs under varumärkena Spectacular, Ai Eyewear samt
        Profil Optik i Danmark. Spectacular Group har genom digitalisering,
        abonnemangserbjudanden och andra innovativa koncept drivit en tillväxt
        och lönsamhetsutveckling som är bland de högsta i Europa. Våra kunder är
        alltid i fokus och vi har ett tydligt integrerat hållbarhetsperspektiv
        genom hela vår värdekedja. Spectacular korades till Sveriges mest
        hållbara optiker i Sustainable Brand Index 2022.<br /><br />Vi på
        Spectacular tar oss tid för dig, vi ser dig och vill göra vad vi kan för
        att du ska hitta rätt glasögon och linser – för alla dina behov. Med
        legitimerade optiker som ser till hela din ögonhälsa, individanpassade
        kvalitetsglas, brett sortiment och vårt smarta Lifestyle-abonnemang som
        gör det enklare än någonsin att ha glasögon och linser. Välkommen in och
        prova allt från de senaste trenderna, till glasögonen för din sport.
        Synundersökningen bokar du här på spectacular.se.
      </h5>
    </div>
    <div></div>
  </div>
</template>

<script></script>

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
