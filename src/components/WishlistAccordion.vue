
<!--Therese-->
<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openBox() {
      this.isOpen = true;
    },
    closeBox() {
      this.isOpen = false;
    },
  },
};
</script>

<template>
  <div class="box" :class="{ open: isOpen }">
    <div class="content">
      <!-- Add box content  here -->
      <h3>Test</h3>
    </div>
  </div>
</template>

<style>
.box {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background-color: #f32323fd;
  transition: transform 0.3s ease-out;
  transform: translateX(100%);
}

.box.open {
  transform: translateX(0);
}

.content {
  padding: 20px;
}
</style>
