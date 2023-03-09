<template>
  <div class="bar-top">
    <span id="bar-title">Checkout</span>
  </div>
  <div class="checkout-background">
    <div id="your-cart">1.Your cart</div>
    <div class="your-cart-container">
      <div class="your-cart-items">
        <div class="fetch-card">
          <div class="row" v-if="items !== null">
            <div class="card" v-for="item in wishlist" :key="item.id">
              <div class="img-wrapper">
                <div class="img-card">
                  <img :src="item.image" class="card-img-top" alt="..." />
                </div>
              </div>

              <div class="card-body">
                <router-link class="link" :to="{ path: `/products/${item.id}` }"
                  ><h5
                    class="card-title"
                    id="card-title"
                    style="cursor: pointer"
                    @click="redirectToProduct"
                  >
                    {{ item.name }}
                  </h5></router-link
                >
                <p class="card-text">
                  {{ item.price }} Sek
                  <span
                    ><ion-icon
                      name="trash-outline"
                      id="trash"
                      style="cursor: pointer"
                      @click="removeFromWishlist(item)"
                    ></ion-icon
                  ></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="delivery-method">2. Delivery method</div>
    <div class="delivery-login-container">
      <span id="account">Already have an account?</span>
      <span id="account-text">Sign in for a faster checkout experience.</span>
      <input type="button" class="signin-button" value="Sign in" />
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
          ><input type="radio" name="radio" value="B" /> 49 sek
          <span class="radio-text">Next day home delivery</span></label
        ><br />
      </div>
    </div>

    <div id="shipping-address">3. Shipping address</div>
    <div class="shipping-container">
      <form class="shipping-form">
        <div class="col-50">
          <label for="fname"> First name</label>
          <input type="text" id="fname" name="firstname" placeholder="John" />
          <label for="lname"> Last name</label>
          <input type="text" id="lname" name="lastname" placeholder="Doe" />
          <label for="adr"> Address</label>
          <input
            type="text"
            id="adr"
            name="address"
            placeholder="542 W. 15th Street"
          />
          <label for="city">City</label>
          <input type="text" id="city" name="city" placeholder="New York" />
          <label for="postal">Postal code</label>
          <input type="text" id="postal" name="postal" placeholder="12345" />
          <label for="phone">Phone number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="070 123 45 67"
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
        <label for="radio1" class="radio2"
          ><input type="radio" name="radio2" value="1" /> Pay with Credit card
          <form class="creditcard-form">
            <div class="col-501">
              <label for="cardnumber"> Card number</label>
              <input
                type="text"
                id="cardnumber"
                name="cardnumber"
                placeholder="123 456 789 123"
              />
              <label for="cardname"> Name on card</label>
              <input
                type="text"
                id="cardname"
                name="cardnme"
                placeholder="John Doe"
              />
              <label for="expDate"> Expiration date</label>
              <input
                type="text"
                id="expDate"
                name="expDate"
                placeholder="01/24"
              />
              <!--Script makes sure the security number can only be 3 digits long-->
              <label for="securityNr">Security number</label>
              <input
                v-model="securityAmount"
                type="number"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                maxlength="3"
                id="securityNr"
                name="securityNr"
                placeholder="000"
              />
            </div>
          </form> </label
        ><br />

        <label for="radio2" class="radio2"
          ><input type="radio" name="radio2" value="2" /> PayPal
          <span class="radio-text"
            >You will be directed to the PayPal website after submitting your
            order</span
          ></label
        ><br />
      </div>
    </div>

    <div class="total-container">
      <p id="totalcost">Total: {{ total }}</p>
      <!--INSERT TOTAL COST HERE-->
      <input
        type="button"
        class="continue-button"
        value="Continue to payment"
      />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.wishlist = JSON.parse(localStorage.getItem("wishlist"));
  },
};
</script>

<style scoped>
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
.your-cart-container,
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
.radio1,
.radio2 {
  border: 1px solid #ebebeb;
  border-radius: 5px;
  padding: 1rem;
  width: 80vw;
  margin-bottom: 5px;
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
@media screen and (max-width: 430px) {
  #bar-title {
    margin-left: 1rem;
  }
}

/*----------Your cart fetch styling here-------------*/
.card {
  margin: 0;
  width: 50%;
  height: 50vh;
  overflow: hidden;
  border-radius: 0;
  justify-content: center;
}
.row {
  justify-content: center;
  width: 100%;
}
.card-body {
  padding-top: 1.5vh;
  justify-content: center;
  width: 100%;
}

.link {
  color: black;
  text-decoration: none;
}

a:hover {
  color: #4a6f54;
  font-style: italic;
}

.img-card img {
  /* padding: 10px; */
  height: 30vh;
  display: grid;
  grid-auto-rows: auto;
  width: 100%;
  overflow: hidden;
  border-radius: 0;
}

.img-wrapper {
  display: flex;
  justify-content: center;
}
.img-card {
  position: relative;
  width: max-content;
  width: 30vw;
  box-sizing: border-box;
}
.card-title {
  font-size: 0.7em;
  margin: 0;
}
.card-text {
  font-size: 0.6em;
  margin: 0;
}
#trash {
  padding-left: 2vw;
  font-size: 1.1em;
  position: absolute;

  right: 1.5vw;
}
</style>
