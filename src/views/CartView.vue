<template>
  <div class="all">
    <h1 class="yourCart">Your Cart</h1>
    <CartCard
      v-for="(item, index) in cart"
      :key="index"
      :product="item"
      :index="index"
    />
    <h2 class="noItem" v-if="cart.length === 0">No Items</h2>
    <div>
      <b-button
        v-if="cart.length !== 0"
        @click="$bvModal.show('bv-modal-example')"
        variant="light"
        class="checkOutButton"
        >Check Out Items</b-button
      >
      <b-modal ref="my-modal" id="bv-modal-example" hide-footer>
        <template #modal-title> Check Out Confirmation </template>
        <div class="d-flex text-center">
          <h3>Are you sure you want to check out these items ?</h3>
        </div>
        <b-button variant="success" class="mt-3" block @click="checkOutItems"
          >Check Out
        </b-button>
        <b-button
          class="mt-3"
          style="margin-left: 10px"
          block
          @click="$bvModal.hide('bv-modal-example')"
          >Cancel</b-button
        >
      </b-modal>
    </div>

    <!-- @click="checkOutItems" -->
  </div>
</template>

<script>
  import { mapState, mapActions } from "vuex";
  import CartCard from "@/components/CartCard.vue";
  export default {
    components: {
      CartCard,
    },
    computed: {
      ...mapState(["cart"]),
    },
    methods: {
      ...mapActions(["checkOut"]),
      checkOutItems() {
        this.checkOut();
        this.$refs["my-modal"].hide();
        this.$router.push("/ordered");
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
  .yourCart {
    color: aliceblue;
    display: flex;
    background-color: black;
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
