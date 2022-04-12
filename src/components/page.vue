<template>
  <h1>page页面</h1>
  <button @click="goPage">点击按钮跳转页面</button>
  <button @click="$router.go(1)">前进</button>
  <button @click="$router.go(-1)">后退</button>
  <router-link to="/page?id=123">参数变化导致路由更新</router-link>
</template>
<script>
export default {
  name: "Page",
  methods: {
    goPage() {
      //this.$router.push("/");
      //this.$router.push({ path: "/news/1" });
      //this.$router.push({name:"news",params:{id:1}});
      //replace替换当前的位置
      this.$router.push({ path: "/news/1", query: { id: 1 }, replace: true });
    },
  },
  beforeRouteEnter(to, from) {
    console.log("路由进入组件");
  },
  beforeRouteUpdate(to, from) {
    console.log("路由更新组件");
  },
  beforeRouteLeave(to, from) {
    console.log("路由离开组件");
  },
};
</script>
<style lang='less' scoped>
</style>