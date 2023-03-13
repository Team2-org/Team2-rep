import { createStore } from "vuex";

function updateLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
function updateLocalStorageWishlist(wishlistarray) {
  localStorage.setItem("wishlistarray", JSON.stringify(wishlistarray));
  //   localStorage.getItem("wishlistarray");
  //   if (wishlistarray) {
  //     wishlistarray = JSON.parse(wishlistarray);
  //   }
}

export default createStore({
  //   Store data
  state: {
    cart: [],
    wishlistarray: [],
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
    wishlistItems: (state) => {
      return state.wishlistarray;
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

    // Removing item from cart/decreasing, from the ProductPage component
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
    // Removing item from cart, from the cart component
    RemoveItemFromCart(state, item) {
      const i = state.cart.map((item) => item.id).indexOf(item.id);
      state.cart.splice(i, 1);
      updateLocalStorage(state.cart);
    },
    // Add to wishlist, from ProductPage and TheCard
    addToWishlist(state, item) {
      let product = state.wishlistarray.find((i) => i.id === item.id);
      if (product == null) {
        state.wishlistarray.push({ ...item });
      }
      updateLocalStorageWishlist(state.wishlistarray);
    },
    // Removing item from wishlist, from the WishlistItems component
    RemoveItemFromWishlist(state, item) {
      const i = state.wishlistarray.map((item) => item.id).indexOf(item.id);
      state.wishlistarray.splice(i, 1);
      updateLocalStorageWishlist(state.wishlistarray);
    },
    updateWishlistFromLocalStorage(state) {
      const wishlistarray = localStorage.getItem("wishlistarray");
      if (wishlistarray) {
        state.wishlistarray = JSON.parse(wishlistarray);
      }
    },
  },

  // Methods that can't change data in the state, but can acces it
  actions: {},
  modules: {},
});
