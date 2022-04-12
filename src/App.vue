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
    let api = "https://api.apiopen.top/getJoke?page=1&count=10&type=text";
    //方法一、fetch
    // fetch(api)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     store.setDzList(result.result);
    //     console.log(result);
    //   });
    //方法二、axios
    axios.get(api).then((result) => {
      store.setDzList(result.data.result);
      console.log(result);
    });
  },
};
</script>

<style>
</style>
