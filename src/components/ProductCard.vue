<template>
  <div class="card">
    <div @click="toProductDetail(product.id)" class="card-inside">
      <img style="height: 300px" :src="product.image" />
      <h6 style="font-weight: bold; text-align: justify">
        {{ product.title }}
      </h6>
    </div>

    <div class="card-inside">
      <p style="text-align: left">${{ product.price }}</p>
      <b-button
        variant="success"
        @click="addToMyCart(product)"
        style="width: 100%"
      >
        Add to cart
      </b-button>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from "vuex";
  export default {
    name: "ProductCard",
    methods: {
      ...mapActions(["addToCart", "changeQty"]),
      toProductDetail(id) {
        this.$router.push(`/product/${id}`);
      },
      addToMyCart(itemToCart) {
        const existingItem = this.cart.find((val) => val.id === itemToCart.id);
        if (!existingItem) {
          this.addToCart({ item: itemToCart, quantity: 1 });
        } else {
          const idItem = this.cart.findIndex((val) => val.id === itemToCart.id);
          this.changeQty({
            id: idItem,
            quantity: this.cart[idItem].quantity + 1,
          });
        }
      },
    },
    props: {
      product: Object,
    },
    computed: {
      ...mapState(["cart"]),
    },
  };
</script>

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    width: 22.5%;
    background-color: blanchedalmond;
    align-items: center;
    padding: 10px;
    margin: 8px;
    justify-content: space-between;
  }
  .card-inside {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
</style>
