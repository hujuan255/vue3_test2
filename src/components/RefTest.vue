<template>
  <h1>{{ num }}</h1>
  <button @click="changeNum">点击按钮+1</button>
  <h2>姓名：{{ userInfo.username }}</h2>
  <h2>年龄：{{ userInfo.age }}</h2>
  <h2>职务：{{ userInfo.type }}</h2>
  <button @click="changeType">点击按钮改变职务</button>
  <h2>职务反转：{{ reverseType }}</h2>
  <h2>"----------------------------------------------"</h2>
  <h2>姓名：{{ username }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>职务：{{ type }}</h2>
</template>

<script>
import { ref, reactive, toRefs, computed, watchEffect, watch } from "vue";
export default {
  setup() {
    const num = ref(0);
    const changeNum = () => {
      num.value++;
    };
    const userInfo = reactive({
      username: "tom",
      age: 18,
      type: "student",
    });
    const userInfo2 = reactive({
      username: "jack",
      age: 20,
      type: "student",
      reverseType: computed(() => {
        return userInfo2.type.split("").reverse().join("");
      }),
    });
    const changeType = () => {
      userInfo.type = "teacher";
    };
    watchEffect(() => {
      console.log(userInfo.type);
      console.log("当userInfo.type变化时，执行watch函数");
    });
    //单个监听
    watch(num, (newNum, prevNum) => {
      console.log(newNum, prevNum);
      console.log("当num变化时，执行watch函数");
    });
    //多个监听
    watch([num, userInfo], (newNum, prevNum) => {
      console.log(newNum, prevNum);
      console.log("当num或者userInfo.type变化时，执行watch函数");
    });
    return {
      num,
      changeNum,
      userInfo,
      ...toRefs(userInfo2),
      changeType,
    };
  },
};
</script>
<style>
</style>