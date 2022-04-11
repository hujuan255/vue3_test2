<template>
  <h1>姓名：{{ name }}</h1>
  <h1>班级：{{ className }}</h1>
</template>
<script>
import { inject } from "vue";
export default {
  name: "Student",
  setup() {
    const { name, className } = inject("student");
    return {
      name,
      className,
    };
  },
};
</script>
<style lang='less' scoped>
</style>