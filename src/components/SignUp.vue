<template>
  <div>
    <h2>Sign Up</h2>

    <form id="loginForm">
      <p class="inputLabel" id="firstLabel">First name</p>
      <input
        class="formInput"
        type="text"
        id="firstName"
        placeholder="First name"
      />
      <p class="inputLabel" id="lastLabel">Last name</p>
      <input
        class="formInput"
        type="text"
        id="lastName"
        placeholder="Last name"
      />
      <p class="inputLabel" id="emailLabel">E-mail</p>
      <input
        class="formInput"
        type="email"
        id="email"
        placeholder="name@mail.com"
      />
      <!-- Password input with show password button -->
      <div class="passw">
        <p class="inputLabel" id="passwordLabel">
          Password
          <span
            ><ion-icon
              name="eye-outline"
              @click.prevent="ToggleTypeA()"
            ></ion-icon
          ></span>
        </p>

        <input class="formInput" :type="inputTypeA" id="password" />
      </div>

      <!-- Comfirm password input with show password button -->
      <div class="passw">
        <p class="inputLabel" id="cPasswordlabel">
          Comfirm password
          <span
            ><ion-icon name="eye-outline" @click="ToggleTypeB()"></ion-icon
          ></span>
        </p>

        <input class="formInput" :type="inputTypeB" id="comPassword" />
      </div>

      <!-- <input :type="inputType" />
      <div
        class="button show"
        @click="inputType = 'text'"
        v-show="inputType === 'password'"
      ></div>
      <div
        class="button hide"
        @click="inputType = 'password'"
        v-show="inputType === 'text'"
      ></div> -->

      <button id="loginbtn" @click="closeModal">Sign Up</button>
    </form>
    <p id="member">
      Already a member?
      <!-- <button id="signup" @click="openLogin">Log in here</button>
        <ModalLogin
          :title="'Log in'"
          :is-open="modalIsOpen"
          @close="closeModal"
        >
        </ModalLogin> -->
    </p>
    <slot></slot>
  </div>
</template>

<style>
input {
  border-radius: 5px;
}
#loginbtn {
  background-color: #86b393;
  width: 100%;
  border: none;
  border-radius: 5px;
  margin-bottom: 2vh;
}

#loginForm {
  width: 70%;
  text-align: center;
  align-items: center;
  margin: auto;
}

@media screen and (min-width: 900px) {
  #loginForm {
    width: 50%;
  }
}
.passw {
  display: inline;
}

.inputLabel {
  padding: 0;
  margin: 0;
  text-align: start;
}

.formInput {
  width: 100%;
  margin-bottom: 2vh;
  margin-top: 0vh;
}

span {
  color: grey;
}
#member {
  margin: 0;
}
</style>

<script>
export default {
  data() {
    return {
      inputTypeA: "password",
      inputTypeB: "password",
    };
  },
  methods: {
    ToggleTypeA() {
      this.inputTypeA = this.inputTypeA === "password" ? "text" : "password";
    },
    ToggleTypeB() {
      this.inputTypeB = this.inputTypeB === "password" ? "text" : "password";
    },
  },
};
</script>
