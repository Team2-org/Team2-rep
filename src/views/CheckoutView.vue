<template>
  <div class="bar-top">
    <span id="bar-title">Checkout</span>
  </div>
  <div class="checkout-background">
    <div id="your-cart">1.Your cart</div>
    <div class="your-cart-container">
      <div class="your-cart-items">
        <CartComponent></CartComponent>
      </div>
    </div>

    <div id="delivery-method">2. Delivery method</div>
    <div class="delivery-login-container">
      <span id="account">Already have an account?</span>
      <span id="account-text">Sign in for a faster checkout experience.</span>
      <input
        type="button"
        class="signin-button"
        value="Sign in"
        @click="openLmodal"
      />
      <EmptyModal :title="'Log In'" :is-open="modalIsOpen" @close="closeModal">
      </EmptyModal>
    </div>
    <div class="delivery-options">
      <div class="radio-wrapper">
        <label for="radioA" class="radio"
          ><input type="radio" name="radio" value="Free" /> Free<span
            class="radio-text"
            >1 - 3 days delivery to your closest pick-up point</span
          ></label
        ><br />
        <label for="radioB" class="radio"
          ><input type="radio" name="radio" value="49" /> 49 sek
          <span class="radio-text">Next day home delivery</span></label
        ><br />
      </div>
    </div>

    <div id="shipping-address">3. Shipping address</div>
    <div class="shipping-container">
      <form class="shipping-form">
        <div class="col-50">
          <label for="fname"> First name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="John"
            class="form-input"
          />
          <label for="lname"> Last name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Doe"
            class="form-input"
          />
          <label for="adr"> Address</label>
          <input
            type="text"
            id="adr"
            name="address"
            placeholder="542 W. 15th Street"
            class="form-input"
          />
          <label for="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="New York"
            class="form-input"
          />
          <label for="postal">Postal code</label>
          <input
            type="number"
            id="postal"
            name="postal"
            placeholder="12345"
            class="form-input"
          />
          <label for="phone">Phone number</label>
          <input
            type="number"
            id="phone"
            name="phone"
            placeholder="070 123 45 67"
            class="form-input"
          />
          <label for="checkbox" class="save-checkbox">
            <input type="checkbox" name="checkbox" /> Save this information for
            next time</label
          >
        </div>
      </form>
    </div>

    <div id="payment-method">4. Payment method</div>
    <div class="payment-container">
      <div class="radio2-wrapper">
        <div class="radio1-wrapper">
          <label for="radio2" id="paycredit" class="radio2">
            <input type="radio" name="radio2" value="1" />
            Pay with Credit card
            <i class="bi bi-credit-card"></i>
          </label>
          <form class="creditcard-form">
            <div class="col-501">
              <label for="cardnumber"> Card number</label>
              <input
                type="number"
                id="cardnumber"
                name="cardnumber"
                placeholder="123 456 789 123"
                class="form-input"
              />
              <label for="cardname"> Name on card</label>
              <input
                type="text"
                id="cardname"
                name="cardnme"
                placeholder="John Doe"
                class="form-input"
              />
              <label for="expDate"> Expiration date</label>
              <input
                type="text"
                id="expDate"
                name="expDate"
                placeholder="01/24"
                class="form-input"
              />
              <!--Script makes sure the security number can only be 3 digits long-->
              <label for="securityNr">Security number</label>
              <input
                type="number"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                maxlength="3"
                id="securityNr"
                name="securityNr"
                placeholder="000"
                class="form-input"
              />
            </div>
          </form>
        </div>
        <br />

        <label for="radio2" class="radio2"
          ><input type="radio" name="radio2" value="2" /> PayPal
          <i id="paypalIcon" class="bi bi-paypal"></i
          ><span class="radio-text"
            >You will be directed to the PayPal website after submitting your
            order</span
          ></label
        ><br />
      </div>
    </div>

    <div class="total-container">
      <p id="totalcost">Total: {{ cartTotal }}</p>
      <!--INSERT TOTAL COST HERE-->
      <input
        @click.prevent="continueToPayment"
        @click="checkFields"
        type="button"
        class="continue-button"
        value="Continue to payment"
      />
      <Transition
        ><p v-if="showErrorMessage" style="color: red">
          Please fill in all fields before continuing
        </p></Transition
      >
    </div>
  </div>
</template>

<script>
import CartComponent from "../components/CartComponent.vue";
import EmptyModal from "../components/EmptyModal.vue";
export default {
  data() {
    return {
      modalIsOpen: false,
      fname: "",
      lname: "",
      adr: "",
      city: "",
      postal: "",
      phone: "",
      cardnumer: "",
      cardname: "",
      expDare: "",
      securityNr: "",
      showErrorMessage: false, // Shows error message if the above are empty
    };
  },
  methods: {
    openLmodal() {
      this.modalIsOpen = true;
    },
    closeModal() {
      this.modalIsOpen = false;
    },
    continueToPayment() {
      if (
        !this.fname ||
        !this.lname ||
        !this.adr ||
        !this.city ||
        !this.postal ||
        !this.phone ||
        !this.cardnumber ||
        !this.cardname ||
        !this.expDate ||
        !this.securityNr
      ) {
        this.showErrorMessage = true;
      } else {
        // code here to continue to payment
        location.reload;
        this.showErrorMessage = false;
      }
    },
    checkFields() {
      const inputs = document.querySelectorAll(".form-input");
      for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        if (input.value === "") {
          input.classList.add("invalid");
        } else {
          input.classList.remove("invalid");
        }
      }
    },
  },
  computed: {
    items() {
      return this.$store.getters.cartItems;
    },
    cartTotal() {
      return this.$store.getters.cartTotal;
    },
  },

  components: { EmptyModal, CartComponent },
};
</script>

<style scoped>
.form-input {
  border: 1px solid black;
  margin-bottom: 1rem;
}

.invalid {
  border: 1px solid red !important ;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.bar-top {
  width: 100vw;
  height: 80px;
  background-color: white;
}
#bar-title {
  font-family: italiana;
  font-size: 1.5rem;
  display: flex;
  justify-content: flex-start;
  margin-left: 50px;
  margin-top: 50px;
  transition: ease all 0.2s;
}
.checkout-background {
  background-color: #fff3f3;
  width: 100vw;
  height: 100%;
  transition: ease all 0.2s;
  font-family: Quicksand;
}
#your-cart,
#delivery-method,
#shipping-address,
#payment-method {
  display: flex;
  justify-content: flex-start;
  transition: ease all 0.2s;
  padding: 1rem 3vw 0;
  font-weight: 600;
  font-size: 1.3rem;
}
.your-cart-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* width: 90vw; */
  /* height: 90vh; */
  margin: 0 auto;
  margin-bottom: 1rem;
  padding: 2vh 5vw 2vh 5vw;
  background-color: white;
}
.shipping-container,
.payment-container,
.total-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;
  height: 90vh;
  margin: 0 auto;
  margin-bottom: 1rem;
  background-color: white;
}
.delivery-login-container {
  width: 90vw;
  height: 20vh;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  background-color: white;
}
.delivery-options {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90vw;
  height: 30vh;
  margin: 0 auto;
  margin-top: -2rem;
  margin-bottom: 1rem;
  background-color: white;
}
.delivery-login-container,
.total-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0 1rem;
  border-bottom: 2rem solid #fff3f3;
}
#account,
#account-text {
  color: black;
}
#account {
  font-weight: 600;
}
#account-text,
.save-checkbox {
  font-size: small;
}
.signin-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Quicksand", sans-serif;
  font-size: 1.2rem;
  margin-top: 0vw;
  width: 10rem;
  height: 3rem;
  margin: 1vw;
  background: rgba(134, 179, 147, 0.57);
  border-radius: 5px;
  border: none;
}

.radio-wrapper {
  margin-left: 1rem;
}
.radio-text {
  display: flex;
  font-size: small;
}
.radio,
.radio2 {
  border: 1px solid #ebebeb;
  border-radius: 5px;
  padding: 1rem;
  width: 80vw;
  margin-bottom: 5px;
}
.radio1-wrapper {
  border: 1px solid #ebebeb;
  border-radius: 5px;
  padding-bottom: 1rem;
}
#paycredit {
  border: none;
}
.shipping-container,
.payment-container {
  height: auto;
  padding: 1rem;
}
.col-50 {
  display: flex;
  flex-direction: column;
  min-width: 80vw;
}
input::placeholder {
  color: rgb(162, 158, 158);
}
input[type="text"],
input[type="number"] {
  width: 100%;
  height: 2.5rem;
  border: 1px solid rgb(230, 227, 227);
  appearance: none;
  -moz-appearance: textfield; /*Removes arrows on number field */
}
.col-501 {
  font-size: small;
  padding-left: 1rem;
  padding-right: 1rem;
}
.total-container {
  height: 20vh;
  padding-bottom: 10px;
}
#totalcost {
  font-weight: 600;
}
.continue-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Quicksand", sans-serif;
  font-size: 1.2rem;
  height: 3rem;
  background: rgba(134, 179, 147, 0.57);
  border-radius: 5px;
  border: none;
}

@media screen and (min-width: 600px) {
  #your-cart,
  #delivery-method,
  #shipping-address,
  #payment-method {
    padding-left: 2em;
  }
}
@media (min-width: 768px) {
  #paycredit i,
  #paypalIcon {
    margin-left: 20px;
    font-size: 1.5rem;
  }
}

@media screen and (min-width: 992px) {
  #bar-title {
    margin-left: 7em;
  }
  .your-cart-container,
  .shipping-container,
  .payment-container,
  .total-container,
  .delivery-login-container,
  .delivery-options {
    width: 70vw;
  }
  #your-cart,
  #delivery-method,
  #shipping-address,
  #payment-method {
    padding-left: 7.5em;
  }
  .radio {
    width: 65vw;
    display: flex;
  }
  .radio-wrapper label input[type="radio"] {
    margin-right: 10px;
  }

  .radio-text {
    align-items: center;
    margin-left: 10em;
  }
  .col-50 {
    display: flex;
    flex-direction: column;
    min-width: 65vw;
  }
  .radio2 {
    width: 65vw;
  }
  .col-501 {
    width: 30vw;
  }

  label {
    display: flex;
    align-items: center;
  }

  input[type="radio"],
  #paypal {
    margin-right: 10px;
  }
}

@media screen and (min-width: 1200px) {
  #your-cart,
  #delivery-method,
  #shipping-address,
  #payment-method {
    padding-left: 10em;
  }
}

/*----------Your cart fetch styling here-------------*/
</style>
