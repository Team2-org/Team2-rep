<template>
  <p v-text="variable"></p>
</template>
<script>
import store from "../store";

export default {
  computed: {
    variable: function () {
      return store.getters.getVariable;
    },
  },
};
</script>
