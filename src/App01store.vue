<template>
  <!-- <RefTest></RefTest> -->
  <!-- 使用router-link 组件进行导航 通过传递‘to’来指定连接 -->
  <router-link to="/">首页</router-link>
  <router-link to="/news/1">新闻页</router-link>
  <!-- 命名视图，同级展示多个组件 -->
  <router-view name="ShopTop"></router-view>
  <router-view></router-view>
  <router-view name="ShopFooter"></router-view>
  <StoreTest></StoreTest>
</template>


<script>
import store from "./components/store/index.js";
import StoreTest from "./components/StoreTest.vue";
//import RefTest from "./components/RefTest.vue";
export default {
  name: "App",
  components: {
    //RefTest,
    StoreTest,
  },
  provide: {
    store,
  },
};
</script>

<style>
</style>
