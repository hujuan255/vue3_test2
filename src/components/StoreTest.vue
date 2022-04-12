<template>
  <!-- 状态管理 -->
  <h1>{{ store.state.message }}</h1>
  <button @click="store.setMessage('你好')">点击切换内容</button>
  <h1>ajax请求</h1>
  <ul>
    <li v-for="(item, index) in store.state.duanziList" :key="index">
      {{ item.text }}
    </li>
  </ul>
</template>
<script>
export default {
  inject: ["store"],
};
</script>
<style lang='less' scoped>
</style>