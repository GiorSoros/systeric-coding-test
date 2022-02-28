import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductDetail from "../views/ProductDetail";
import CartView from "../views/CartView";
import OrderedItems from "../views/OrderedItems";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/product/:id",
    name: "product",
    component: ProductDetail,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
  {
    path: "/ordered",
    name: "ordered",
    component: OrderedItems,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
