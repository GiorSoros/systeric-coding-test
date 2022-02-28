export default {
  getData({ commit }) {
    fetch("https://fakestoreapi.com/products", {
      method: "get",
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        commit("setData", jsonData);
      });
  },
  addToCart({ commit }, { item, quantity }) {
    commit("addItem", { item, quantity });
  },
  changeQty({ commit }, { id, quantity }) {
    commit("changeQuantity", { id, quantity });
  },
  deleteCartItem({ commit }, id) {
    commit("deleteItem", id);
  },
  checkOut({ commit }) {
    commit("checkOutCart");
  },
  clearOrdered({ commit }) {
    commit("clearItems");
  },
};
