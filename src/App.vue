<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <h3>My APP</h3>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="col">
      <router-link to="/" class="btn btn-outline-primary mr-3">Home</router-link>
      <router-link to="/hello" class="btn btn-outline-success mr-3">Hello</router-link>
      <router-link to="/user" class="btn btn-outline-dark mr-3">User</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
