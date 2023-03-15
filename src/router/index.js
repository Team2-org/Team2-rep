import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },

    {
      path: "/products/:id",
      name: "productDetails",
      component: () => import("../components/ProductPage.vue"),
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("../views/CheckoutView.vue"),
    },
    {
      path: "/products/men",
      component: () => import("../components/MenGlass.vue"),
    },
    {
      path: "/products/women",
      component: () => import("../components/WomenGlass.vue"),
    },
    {
      path: "/products/unisex",
      component: () => import("../components/UnisexGlass.vue"),
    },
    {
      path: "/contact",
      name: "ContactUs",
      component: () => import("../components/ContactUs.vue"),
    },
    {
      path: "/checkout/confirmation",
      name: "confirmation",
      component: () => import("../views/ConfirmationView.vue"),
    },
  ],
});

export default router;
