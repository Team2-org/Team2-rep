<script setup></script>

<template>
  <div class="nav-icon">
    <i class="bi bi-cart2 px-2" @click="expandAccordion" role="link"></i>
    <CartAccordion :title="'cart'" @click="contractAccordion"> </CartAccordion>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    expandAccordion() {
      this.isExpanded = true;
    },
    contractAccordion() {
      this.isExpanded = false;
    },
  },
  components: { CartAccordion },
};
</script>

<style scoped>
.accordion-header {
  padding: 1rem;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 1rem;
  left: 20%;
  width: fit-content;
}
.accordion-body {
  padding: 1rem;
  margin-left: 1rem;
  border: 1px solid lightgray;
  border-radius: 1rem;
  height: 60vh;
  width: 30vw;
  margin-top: 0.5rem;
}
</style>
