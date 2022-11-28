<template>
  <section>
    <img src="@/assets/images/step9/puzzle-jira.svg" class="jira" alt="Jira" />
    <img
      src="@/assets/images/step9/puzzle-confluence.svg"
      class="confluence"
      alt="Confluence"
    />
    <img
      src="@/assets/images/common/avatar-triangle.svg"
      class="triangle"
      alt="triangle"
    />
    <img
      src="@/assets/images/common/avatar-circle-1.svg"
      class="circle"
      alt="circle"
    />
    <img
      src="@/assets/images/common/avatar-square.svg"
      class="square"
      alt="square"
    />
    <div class="container">
      <h1>恭喜通過 Scrum 新手村！</h1>
      <img
        src="@/assets/images/step9/puzzle.svg"
        class="puzzle"
        alt="挑戰成功"
      />
    </div>
    <TheButton @click="goNextStep">重新開始</TheButton>
  </section>
</template>

<script>
import TheButton from '@/components/TheButton'

export default {
  components: {
    TheButton
  },
  methods: {
    goNextStep() {
      this.$store.commit('SET_CURRENT_STEP', -8)
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  align-items: center;
  height: calc(100vh - 60px);
  overflow: hidden;
}
.container {
  z-index: 5;
}
h1 {
  font-size: 60px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
}
.puzzle {
  display: block;
  width: 100%;
  max-width: 1085px;
  margin: 0 auto;
}
.jira {
  position: absolute;
  left: 100px;
  bottom: 40px;
}
.confluence {
  position: absolute;
  top: 53px;
  right: 83px;
}
.triangle {
  position: absolute;
  top: 160px;
  left: 253px;
}
.circle {
  position: absolute;
  left: 50%;
  bottom: 73px;
}
.square {
  position: absolute;
  top: 50%;
  right: 113px;
}
</style>
