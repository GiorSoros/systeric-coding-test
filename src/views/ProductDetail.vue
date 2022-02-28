<template>
  <div class="all">
    <div class="col-1">
      <img :src="product.image" style="width: 100%" />
    </div>
    <div class="col-2">
      <h1 style="text-align: justify">{{ product.title }}</h1>
      <p style="text-align: justify">{{ product.description }}</p>
      <p>Stock: {{ product.rating.count }}</p>
      <div class="quantity">
        <label style="margin-right: 10px">Quantity: </label>
        <b-form-spinbutton
          id="demo-sb"
          v-model="quantity"
          min="1"
          :max="product.rating.count"
          class="spin"
        ></b-form-spinbutton>
      </div>
      <b-button
        variant="success"
        @click="addToMyCart(product, quantity)"
        class="btn-add"
      >
        Add to cart
      </b-button>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from "vuex";
  export default {
    data() {
      return {
        quantity: 1,
        product: {},
      };
    },
    computed: {
      ...mapState(["cart"]),
    },
    methods: {
      ...mapActions(["addToCart", "changeQty"]),
      addToMyCart(itemToCart, qty) {
        const existingItem = this.cart.find((val) => val.id === itemToCart.id);
        if (!existingItem) {
          this.addToCart({ item: itemToCart, quantity: 1 });
        } else {
          const idItem = this.cart.findIndex((val) => val.id === itemToCart.id);
          this.changeQty({
            id: idItem,
            quantity: this.cart[idItem].quantity + qty,
          });
        }

        this.$router.push("/cart");
      },
    },
    mounted() {
      fetch(`https://fakestoreapi.com/products/${this.$route.params.id}`, {
        method: "get",
      })
        .then((response) => {
          return response.json();
        })
        .then((jsonData) => {
          this.product = jsonData;
        });
    },
  };
</script>

<style scoped>
  .all {
    display: flex;
    color: azure;
    flex-direction: row;
    width: 100%;
    align-items: flex-start;
    padding-bottom: 10px;
  }
  .col-1 {
    display: flex;
    flex-direction: column;
    width: 35% !important;
    margin-left: 3%;
    align-items: flex-start;
  }
  .btn-add {
    width: 30%;
    margin-top: 10px;
    border-radius: 10px;
  }
  .col-2 {
    display: flex;
    flex-direction: column;
    padding: 0 2%;
    width: 60%;
    align-items: flex-start;
  }
  .spin {
    width: 15%;
  }
  .quantity {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
</style>
