<template>
  <TheHeader />
  <router-view />
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
export default {
  components: {
    TheHeader
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap');
@import '@/assets/scss/variables';

#app {
  font-family: 'Noto Sans TC', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black;
  * {
    box-sizing: border-box;
  }
}
::selection {
  background: $green;
  color: #fff;
}
::-moz-selection {
  background: $green;
  color: #fff;
}
</style>
