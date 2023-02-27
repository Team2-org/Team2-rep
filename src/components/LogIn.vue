<template>
  <div>
    <h2>Log In</h2>

    <form id="loginForm">
      <p id="emailLabel">E-mail</p>
      <input type="email" id="email" placeholder="name@mail.com" />

      <!-- Password input with show password button -->
      <div class="passw">
        <p class="inputLabel" id="passwordLbl">
          Password
          <span
            ><ion-icon
              name="eye-outline"
              @click.prevent="ToggleType()"
            ></ion-icon
          ></span>
        </p>

        <input class="formInput" :type="inputType" id="password" />
      </div>

      <button id="loginbtn" @click="closeModal">Log in</button>
    </form>
    <p id="member">Not a member yet?</p>
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

#signup {
  border: none;
  background-color: none;
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

#passwordLabel {
  padding: 0;
  margin: 0;
  text-align: start;
}

#password {
  width: 100%;
  margin-bottom: 2vh;
  margin-top: 0vh;
}

#emailLabel {
  padding: 0;
  margin: 0;
  text-align: start;
}
#email {
  width: 100%;
  margin-bottom: 2vh;
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
      inputType: "password",
    };
  },
  methods: {
    ToggleType() {
      this.inputType = this.inputType === "password" ? "text" : "password;";
    },
  },
};
</script>
