<template>
  <div class="home">
    <ProductCard
      v-for="product in products"
      :product="product"
      :key="product.id"
    />
  </div>
</template>

<script>
  import ProductCard from "@/components/ProductCard.vue";
  import { mapState } from "vuex";

  export default {
    name: "HomeView",
    components: {
      ProductCard,
    },
    computed: {
      ...mapState(["products"]),
    },
  };
</script>

<style scoped>
  .home {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
  }
</style>
