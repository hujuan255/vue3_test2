<template>
  <h1>page页面</h1>
  <button @click="goPage">点击按钮跳转页面</button>
</template>
<script>
export default {
  name: "Page",
  methods: {
    goPage() {
      //this.$router.push("/");
      //this.$router.push({ path: "/news/1" });
      //this.$router.push({name:"news",params:{id:1}});
      //this.$router.push({ path: "/news/1", query: { id: 1 } });
    },
  },
};
</script>
<style lang='less' scoped>
</style>