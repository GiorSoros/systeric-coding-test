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
      <p style="text-align: left">Quantity: {{ product.quantity }}</p>
      <h3 style="text-align: left">Delivering to you!</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OrderedCard",
    props: {
      product: Object,
      index: Number,
    },
    methods: {
      toProductDetail(id) {
        this.$router.push(`/product/${id}`);
      },
    },

    data() {
      return {};
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
