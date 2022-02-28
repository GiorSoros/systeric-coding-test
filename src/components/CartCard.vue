<template>
  <div class="card">
    <div class="card-inside">
      <img
        @click="toProductDetail(product.id)"
        style="height: 300px"
        :src="product.image"
      />
    </div>
    <div class="card-inside">
      <h6 style="font-weight: bold; text-align: justify">
        {{ product.title }}
      </h6>
      <p style="text-align: left">${{ product.price }}</p>
      <div class="quantity">
        <label style="margin-right: 10px">Quantity: </label>
        <b-form-spinbutton
          id="demo-sb"
          v-model="product.quantity"
          @change="changeQuantity($event)"
          min="1"
          :max="product.rating.count"
          class="spin"
        ></b-form-spinbutton>
      </div>
      <b-button
        @click="deleteItem(index)"
        style="margin-top: 4%"
        variant="danger"
        >Delete Item</b-button
      >
    </div>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  export default {
    name: "ProductCard",
    methods: {
      ...mapActions(["addToCart", "changeQty", "deleteCartItem"]),
      toProductDetail(id) {
        this.$router.push(`/product/${id}`);
      },
      changeQuantity(qty) {
        this.changeQty({ id: this.index, quantity: qty });
      },
      deleteItem(index) {
        this.deleteCartItem(index);
      },
    },
    props: {
      product: Object,
      index: Number,
    },

    data() {
      return {
        quantity: 0,
      };
    },
  };
</script>

<style scoped>
  .card {
    display: flex;
    flex-direction: row;
    width: auto;
    background-color: blanchedalmond;
    padding: 10px;
    margin: 8px;
    justify-content: flex-start;
  }
  .card-inside {
    display: flex;
    width: 20%;
    flex-direction: column;
    margin-left: 1%;
  }
  .quantity {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
</style>
