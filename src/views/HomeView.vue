<template>
  <main></main>
</template>

<script>
export default {
  name: 'HomeView',
  components: {}
}
</script>

<style lang="scss" scoped>
main {
  height: calc(100vh - 60px);
  background-repeat: no-repeat;
  background-image: url(@/assets/images/common/bg-1.svg),
    url(@/assets/images/common/bg-2.svg), url(@/assets/images/common/bg-3.svg),
    url(@/assets/images/common/bg-4.svg);
  background-position: bottom 50% left 0, bottom 18px left 16px,
    bottom 84px right 0, top 16px right 0;
}
</style>
