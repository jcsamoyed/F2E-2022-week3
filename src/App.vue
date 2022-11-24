<template>
  <TheHeader />
  <router-view />
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'

export default {
  components: {
    TheHeader
  },
  methods: {
    handleCloseWindow(e) {
      const dialogText =
        '還沒完成挑戰喔！確定要放棄嗎？(下次再挑戰要重頭開始喔！)'
      e.returnValue = dialogText
      return dialogText
    }
  },
  mounted() {
    window.addEventListener('beforeunload', (e) => this.handleCloseWindow(e))
  },
  unmounted() {
    window.removeEventListener('beforeunload', (e) => this.handleCloseWindow(e))
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap');
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
