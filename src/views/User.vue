<template>
  <h1>姓名：{{ $store.state.user.username }}</h1>
  <h1>年龄：{{ $store.state.user.age }}</h1>
  <h1>描述：{{ $store.getters.description }}</h1>
  <button @click="setAge">异步修改年龄</button>
  <h1>-----------------命名空间的写法---------------------------</h1>
  <h1>姓名：{{ $store.state.user1.username }}</h1>
  <h1>年龄：{{ $store.state.user1.age }}</h1>
  <h1>描述：{{ $store.getters["user1/description"] }}</h1>
  <button @click="setAge1">异步修改年龄</button>
  <h1>------------------辅助函数的写法--------------------------</h1>
  <h1>姓名：{{ user1.username }}</h1>
  <h1>年龄：{{ user1.age }}</h1>
  <h1>描述：{{ description }}</h1>
  <button @click="asyncSetAge(100)">异步修改年龄</button>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "User",
  mounted() {
    console.log(this.$store);
  },
  methods: {
    setAge() {
      this.$store.dispatch("asyncSetAge");
    },
    setAge1() {
      this.$store.dispatch("user1/asyncSetAge");
    },
    ...mapActions("user1", ["asyncSetAge"]),
  },
  computed: {
    ...mapState(["user1"]),
    ...mapGetters("user1", ["description"]),
  },
};
</script>
<style lang='less' scoped>
</style>