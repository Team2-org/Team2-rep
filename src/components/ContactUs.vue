<template>
  <div class="contact">
    <div class="contact-heading">
      <h2>Contact Us</h2>
      <p>
        We answer your questions and help with orders. Do not hesitate to call
        us if you have any questions. We are happy to help!
      </p>
    </div>

    <img src="../../public/img/pexels-yan-krukau-8867482.jpg" alt="" />
  </div>
  <div class="contact-details">
    <div class="contact-section text-center">
      <h4>How to get in touch</h4>
      <a class="tel-no" href="tel:08 444 555 66">Tel: 08 444 555 66</a><br>
      <a style="cursor: pointer" @click="sendEmail()">
        E-mail: Spectacular.glassögonr@gmail.com
      </a>
    </div>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            How is my order shipped?
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse "
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            When you place your order, all available delivery methods and prices
            are displayed on the checkout page after you have filled in your
            address information.
            <br />
            Package will deliver within 1-3 working days to your closest pick-up
            point with free of cost. Or package can deliver next day to your
            home address which cost 79 kr for shipping .
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            How can I cancel or chnage my order?
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            Has something gone wrong? You can cancel your order, as long as it
            has not been shipped yet. You cannot change your order or add items
            after the order has been placed. If you want to change your order,
            you can easily first cancel and then place a new order.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            How do I make a return?
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            If you want to return package, use the return slip included in the
            package to send back your goods. If you have lost your return slip,
            you can contact our customer service to get a new one.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    sendEmail() {
      window.location = "mailto:Spectacular.glassögonr@gmail.com";
    },
  },
};
</script>
<style scoped>
.contact {
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  flex: 1;
  height: 100%;
  width: 200px;
  margin-top: 0;
}

.contact-heading {
  flex: 1;
  height: 100%;
  margin-left: 10%;
  margin-right: 10%;
  font-weight: bold;
}
.tel-no {
  text-decoration: none;
  color: black;
}
.contact-details {
  display: flex;
  padding-top: 20px;
  justify-content: center;
  align-items: center;

}
.accordion {
  flex: 1;
}
.contact-section {
  flex: 1;
}

@media only screen and (max-width: 430px) {
  .contact {
    flex-direction: column;
  }
}
@media only screen and (max-width: 610px) {
  img {
    height: 180px;
  }
}

@media only screen and (max-width: 400px) {
    .contact-details{
        flex-direction: column;
    }
}


</style>
