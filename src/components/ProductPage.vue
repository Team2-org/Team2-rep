<script></script>
<template>
  <div class="container">
    <img
      src="../../public/img/bartosz-sujkowski-uxzWfwOIyT8-unsplash.jpg"
      alt="Snow"
      style="width: 100%"
    />
  </div>
</template>
<style scoped>
.container {
  position: relative;
  width: 100%;
  margin: 10%;
}

.container img {
  width: 100%;
  height: auto;
}

.container .btn {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);

  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
}

.container .btn:hover {
  background-color: black;
}
</style>
