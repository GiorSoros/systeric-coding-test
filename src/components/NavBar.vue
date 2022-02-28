<template>
  <div class="pos">
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand @click="goToHome" style="cursor: pointer"
        >Exclusive Items</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <!-- class="flex-grow-1" -->
      <b-navbar-nav class="flex-grow-1">
        <b-nav-item @click="goToCart">Cart</b-nav-item>
        <b-nav-item @click="goToOrdered">Ordered Items</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav>
        <b-nav-item-dropdown right>
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item v-b-modal.modal-1>Profile</b-dropdown-item>
          <b-dropdown-item v-b-modal.modal-1>Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-modal id="modal-1" title="Sorry">
          <p class="my-4">This is just a dummy!</p>
        </b-modal>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    props: {
      sticky: Boolean,
    },
    methods: {
      goToHome() {
        this.$router.push("/");
      },
      goToCart() {
        this.$router.push("/cart");
      },
      goToOrdered() {
        this.$router.push("/ordered");
      },
    },
  };
</script>

<style scoped>
  .pos {
    position: sticky;
    top: 0px;
    z-index: 9;
  }
</style>
