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
  <h2>"----------------------------------------------"</h2>
  <User :username="username" :age="age"></User>
  <h2>"----------------------------------------------"</h2>
  <Student></Student>
</template>

<script>
import {
  ref,
  reactive,
  toRefs,
  computed,
  watchEffect,
  watch,
  provide,
} from "vue";
import User from "./user/User.vue";
import Student from "./user/Student.vue";
export default {
  components: {
    User,
    Student,
  },
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
      age: 22,
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
    //使用provide
    const student = reactive({
      name: "小航",
      className: "三年二班",
    });
    provide("student", student);
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