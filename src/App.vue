<template>
  <!-- <RefTest></RefTest> -->
  <!-- 使用router-link 组件进行导航 通过传递‘to’来指定连接 -->
  <router-link to="/">首页</router-link>
  <router-link to="/news/1">新闻页</router-link>
  <router-view></router-view>
</template>


<script>
//import RefTest from "./components/RefTest.vue";
export default {
  name: "App",
  // components: {
  //   RefTest,
  // },
};
</script>

<style>
</style>
