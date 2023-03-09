import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import Vuex from "vuex";
import store from "./store";

import "./assets/base.css";

// Import bootstrap for css and js
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App);
app.use(store);
app.use(Vuex);
app.use(router);
app.use(bootstrap);

app.mount("#app");
