<template>
  <div id="app">
    <NavBar :sticky="true" />
    <router-view />
  </div>
</template>

<script>
  import NavBar from "./components/NavBar.vue";

  export default {
    components: {
      NavBar,
    },
    data() {
      return {};
    },
    methods: {},
    mounted: function () {
      this.$store.dispatch("getData");
    },
  };
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: #2c3e50;
  }

  nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
