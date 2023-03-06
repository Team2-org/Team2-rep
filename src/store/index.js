import { createStore } from "vuex";

function updateLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export default createStore({
  //   Store data
  state: {
    cart: [],
  },
  getters: {
    productQuantity: (state) => (item) => {
      const product = state.cart.find((i) => i.id === item.id);
      if (product) return item.quantity;
      else return null;
    },
    cartItems: (state) => {
      return state.cart;
    },
    cartTotal: (state) => {
      return state.cart.reduce((a, b) => a + b.price * b.quantity, 0);
    },
  },
  // Changes data in the state.
  mutations: {
    addToCart(state, item) {
      let product = state.cart.find((i) => i.id === item.id);
      if (product) {
        product.quantity++;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
      updateLocalStorage(state.cart);
    },
    removeFromCart(state, item) {
      let product = state.cart.find((i) => i.id === item.id);
      if (product) {
        if (product.quantity > 1) {
          product.quantity--;
        } else {
          state.cart = state.cart.filter((i) => i.id !== item.id);
        }
      }
      updateLocalStorage(state.cart);
    },
    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem("cart");
      if (cart) {
        state.cart = JSON.parse(cart);
      }
    },
  },
  // Methods that can't change data in the state, but can acces it
  actions: {},
  modules: {},
});
