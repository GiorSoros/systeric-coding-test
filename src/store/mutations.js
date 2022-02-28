import state from "./state";

export default {
  setData: (state, products) => {
    state.products = products;
  },
  addItem: (state, { item, quantity }) => {
    state.cart = [...state.cart, { ...item, quantity }];
  },
  changeQuantity: (state, { id, quantity }) => {
    state.cart[id].quantity = quantity;
  },
  deleteItem: (state, id) => {
    state.cart.splice(id, 1);
  },
  checkOutCart: (state) => {
    state.ordered = state.cart;
    state.cart = [];
  },
  clearItems: (state) => {
    state.ordered = [];
  },
};
