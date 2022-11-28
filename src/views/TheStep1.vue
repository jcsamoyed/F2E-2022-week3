<template>
  <section>
    <div class="block pink">
      <p class="subtitle">
        嗨囉，歡迎加入 TT 資訊，在正式加入專案開發之前，<br />
        需要請你先了解 Scrum的流程與精神！<br />
        請接受挑戰任務，成功通過 Scrum 新手村的挑戰任務吧～～
      </p>
    </div>
    <div class="block green">
      <h1>TT 資訊Scrum新手村懶人包</h1>
      <p class="subtitle">透過越早蒐集回饋，去調適下一步的行動「思維」</p>
    </div>
    <TheButton @click="goNextStep">接受挑戰</TheButton>
    <img
      src="@/assets/images/step1/puzzle-1.svg"
      class="puzzle puzzle-1"
      alt="短衝檢視會議"
    />
    <img
      src="@/assets/images/step1/puzzle-2.svg"
      class="puzzle puzzle-2"
      alt="每日站立會議"
    />
    <img
      src="@/assets/images/step1/puzzle-3.svg"
      class="puzzle puzzle-3"
      alt="短衝自省會議"
    />
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
      this.$store.commit('SET_CURRENT_STEP', 1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';
section {
  height: calc(100vh - 60px);
  overflow: hidden;
}

.block {
  position: absolute;
  background-color: #fff;
  text-align: center;
  padding: 64px;
  border: $border;
  box-sizing: border-box;
  &.green {
    width: 150%;
    box-shadow: 0 16px 0 $green;
    transform: rotate(-18deg);
    top: 15%;
    left: -40%;
    z-index: 2;
  }
  &.pink {
    width: 120%;
    box-shadow: 0 16px 0 $pink;
    transform: rotate(5deg);
    top: 40%;
    right: -30%;
    padding-right: 30px;
    z-index: 0;
    p {
      font-size: 30px;
    }
  }
  h1 {
    font-size: 64px;
    font-weight: 700;
    margin-bottom: 16px;
    white-space: nowrap;
  }
  p {
    font-size: 40px;
    line-height: 1.3;
    white-space: nowrap;
  }
}
.puzzle {
  width: 13%;
  position: absolute;
  &.puzzle-1 {
    transform: rotate(-36deg);
    top: 79px;
    left: 36px;
    z-index: 1;
  }
  &.puzzle-2 {
    transform: rotate(10deg);
    bottom: 120px;
    left: 356px;
    z-index: -1;
  }
  &.puzzle-3 {
    transform: rotate(21deg);
    top: 92px;
    right: 162px;
    z-index: 2;
  }
}
</style>
