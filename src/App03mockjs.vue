<template>
  <StoreTest></StoreTest>
</template>


<script>
import axios from "axios";
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
  setup() {
    let userInfoApi = "user/userinfo";
    axios.get(userInfoApi).then((result) => {
      store.setMessage(result.data.username + result.data.age);
      console.log(result);
    });
    let loginApi = "/login?username=admin&password=123456";
    axios.get(loginApi).then((result) => {
      console.log(result);
    });
  },
};
</script>

<style>
</style>
