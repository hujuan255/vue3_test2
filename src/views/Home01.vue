<template>
  <h1>商品的数量：{{ $store.state.count }}</h1>
  <h2>商品的价格：100</h2>
  <h2>商品的总价：{{ $store.getters.totalprice }}</h2>
  <button @click="changeEvent">添加数量</button>
  <ul>
    <li v-for="(item, i) in $store.state.dzList" :key="i">{{ item.text }}</li>
  </ul>
</template>
<script>
export default {
  name: "Home",
  methods: {
    changeEvent: function () {
      //this.$store.commit("setCount");
      this.$store.commit("setCount", 3);
    },
  },
  mounted() {
    this.$store.dispatch("getDz");
  },
};
</script>
<style lang='less' scoped>
</style>