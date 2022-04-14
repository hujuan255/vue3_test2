<template>
  <router-link to="/user">user</router-link>
  <router-view></router-view>
</template>
<script>
import Home from "@/views/Home.vue";
import User from "@/views/User.vue";
export default {
  name: "App",
  components: {
    Home,
    User,
  },
};
</script>

<style>
</style>
