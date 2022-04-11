<template>
  <div>
    <h1>RepeatParams{{ $route.params.id }}</h1>
  </div>
</template>
<script>
export default {
  name: "RepeatParams",
  mounted() {
    console.log(this.$route);
  },
};
</script>
<style scoped>
</style>