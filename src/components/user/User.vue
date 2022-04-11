<template>
  <h1>username:{{ username }}</h1>
  <h1>age:{{ age }}</h1>
  <h1>description:{{ description }}</h1>
</template>
<script>
import { ref } from "vue";
export default {
  props: ["username", "age"],
  setup(props) {
    const description = ref(props.username + "的年龄是：" + props.age);
    return { description };
  },
};
</script>
<style>
</style>