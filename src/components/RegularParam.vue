<template>
  <div>
    <h1>RegularParam{{ $route.params.id }}</h1>
  </div>
</template>
<script>
export default {
  name: "RegularParam",
  mounted() {
    console.log(this.$route);
  },
};
</script>
<style scoped>
</style>