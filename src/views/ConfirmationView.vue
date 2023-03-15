<template>
  <div class="checkIcon">
    <i class="bi bi-check2-circle" width="32" height="32"></i>
  </div>
  <h1>Thank you for your order!</h1>
  <p class="confirm-text">Order number: #{{ orderNr }}</p>
  <p class="confirm-text" id="emailtext">
    Your order is now on its way. An order confirmation has been sent to your
    email.
  </p>
  <div class="order-img-container">
    <img
      class="order-img"
      src="../assets/img/delivery.jpg"
      alt="Image of delivery person"
    />
  </div>
</template>

<script>
export default {
  data() {
    //Makes the order number a random 8-digit number.
    return {
      orderNr: Math.floor(Math.random() * 90000000) + 10000000,
    };
  },
  mounted() {
    this.orderNr = Math.floor(Math.random() * 90000000) + 10000000;
  },
};
</script>

<style>
h1 {
  font-family: italiana;
  text-align: center;
  margin-top: 5%;
  margin-bottom: 3%;
}
.checkIcon {
  text-align: center;
  font-size: 4rem;
  color: seagreen;
}
.confirm-text {
  text-align: center;
  padding: 1rem;
}
#emailtext {
  margin-bottom: 5%;
}
.order-img-container {
  display: flex;
  justify-content: center;
}
.order-img {
  display: flex;
  width: 100%;
}

@media screen and (min-width: 1000px) {
  .order-img {
    width: 60%;
  }
}
</style>
