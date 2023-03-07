<script setup>
import CompAbout from "../components/CompAbout.vue";
</script>
<template>
  <CompAbout />
</template>

<style>
@media (min-width: 375px) and (max-width: 980px) {
  .glassesImg {
    display: flex;
    object-fit: contain;
    height: 100%;
    width: 100%;
    padding-top: 1%;
    filter: brightness(50%);
  }

  .aboutGlasses {
    background-color: #fff3f3;
  }
  .headLine {
    padding-left: 36%;
    padding-top: 1%;
  }
  .line-1 {
    border-bottom: 2px solid black;
    width: 500px;
    margin-left: 32%;
  }
  .glassesContainer {
    padding-left: 27%;
    padding-top: 1%;
  }

  .imgText {
    margin: 20%;
    color: white;
  }
}
</style>
