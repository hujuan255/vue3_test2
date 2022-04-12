<template>
  <div>
    <h1>首页</h1>
    <router-view></router-view>
    <router-link to="/page">page页</router-link>
  </div>
</template>
<script>
export default {
  name: "Home",
};
</script>
<style scoped>
</style>