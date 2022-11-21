<template>
  <header>
    <h2>Scrum 新手村</h2>
    <div class="progress-bar"></div>
  </header>
</template>

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
  width: 10%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: $yellow;
  z-index: -1;
}
</style>
