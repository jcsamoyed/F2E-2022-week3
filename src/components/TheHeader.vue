<template>
  <header>
    <h2>Scrum 新手村</h2>
    <div
      class="progress-bar"
      :style="{ width: `calc(100% / 9 *${currentStep})` }"
    ></div>
  </header>
</template>

<script>
export default {
  computed: {
    currentStep() {
      return this.$store.state.currentStep
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

header {
  position: relative;
  background-color: $black;
  padding: 18px;
  z-index: 10;
}
h2 {
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  text-align: center;
}
.progress-bar {
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  background-color: $yellow;
  z-index: -1;
}
</style>
