<script setup></script>
<template>
  <Transition name="modal">
    <div class="modal-backdrop" v-show="isFilterVisible" @click="close">
      <div
        id="modal-wrapper"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
        @click.stop=""
      >
        <div class="modal-header" id="modalTitle">
          <slot name="header"></slot>
          <ion-icon
            name="close-outline"
            id="close-modal"
            @click="close"
            aria-label="Close modal"
          ></ion-icon>
        </div>
        <div class="modal-body" id="modalDescription">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("close");
    },
  },
  props: {
    isFilterVisible: Boolean,
  },
};
</script>

<style scoped>
#close-modal {
  display: flex;
  position: absolute;
  top: 3vw;
  right: 2vw;
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer;
}
.modal-backdrop {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
}

#modal-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  background-color: #fff3f3;
  width: 90%;
  height: 100%;
  padding-top: 1vw;
  padding-bottom: 4vw;
}

.modal-header {
  display: flex;
  justify-content: center;
  border-bottom: solid black 1px;
  margin: 0 10px;
}
.modal-body {
  height: 100%;
}
.modal-enter-active {
  transition: transform 0.2s;
}
.modal-leave-active {
  transition: transform 0.2s;
}

.modal-enter-from,
.modal-leave-to {
  transform: translateX(100%);
}

@media screen and (min-width: 600px) {
  #modal-wrapper {
    width: 70%;
  }

  .modal-header {
    margin: 0 20px;
  }
}
@media screen and (min-width: 900px) {
  #modal-wrapper {
    width: 40%;
  }
}
</style>
