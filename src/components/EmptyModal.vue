<script setup>
import LogIn from "./LogIn.vue";
import SignUp from "./SignUp.vue";
</script>

<template>
  <div class="modal-overlay" v-if="isOpen" @click="closeModal">
    <div class="modal-container" @click.stop="">
      <button id="closebtn" @click="closeModal">X</button>
      <div v-show="toggle"><LogIn></LogIn></div>

      <div v-show="!toggle"><SignUp></SignUp></div>
      <button id="changeModal" @click="toggle = !toggle">click here</button>

      <slot></slot>
    </div>
  </div>
</template>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(76, 76, 76, 0.5);
  z-index: 10;
}

.modal-container {
  position: absolute;
  width: 45vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff3f3;
  border-radius: 5px;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 2vh;
}

@media screen and (max-width: 600px) {
  .modal-container {
    width: 80vw;
  }
}

@media screen and (min-width: 900px) {
  .modal-container {
    width: 45vw;
  }
}
#closebtn {
  width: 25px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #fff3f3;
  border: none;
}
#changeModal {
  color: grey;
  background-color: #fff3f3;
  border: none;
}
</style>

<script>
export default {
  data() {
    return { modalIsOpen: false, toggle: true, signupLogin: this.change };
  },

  props: {
    title: String,
    isOpen: Boolean,
    change: String,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    openSmodal() {
      this.modalIsOpen = true;
    },
    // closeModal() {
    //   this.modalIsOpen = false;
    // },
  },
  components: { LogIn, SignUp },
};
</script>
