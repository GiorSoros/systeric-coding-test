<template>
  <div class="all">
    <h1 class="yourOrdered">Your Ordered Items</h1>
    <OrderedCard
      v-for="(item, index) in ordered"
      :key="index"
      :product="item"
      :index="index"
    />
    <h2 class="noItem" v-if="ordered.length === 0">No Items</h2>

    <b-button
      v-if="ordered.length !== 0"
      style="width: 100%; margin-bottom: 10px"
      @click="clearItems"
      variant="outline-light"
      >Clear</b-button
    >
  </div>
</template>

<script>
  import { mapState, mapActions } from "vuex";
  import OrderedCard from "@/components/OrderedCard.vue";
  export default {
    components: {
      OrderedCard,
    },
    computed: {
      ...mapState(["ordered"]),
    },
    methods: {
      ...mapActions(["clearOrdered"]),
      clearItems() {
        this.clearOrdered();
      },
    },
  };
</script>
<style scoped>
  .all {
    align-items: center;
    /* padding: 0 0.5%; */
    background-color: #2c3e50;
  }
  .yourOrdered {
    color: aliceblue;
    display: flex;
    background-color: blueviolet;
    height: 15vh;
    justify-content: center;
    align-items: center;
  }
  .checkOutButton {
    width: 99%;
    margin-bottom: 1%;
    border-radius: 6px;
  }
  .noItem {
    color: greenyellow;
    margin-top: 15%;
    height: 45vh;
  }
</style>
