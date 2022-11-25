<template>
  <section>
    <div class="container">
      <TheDialog avatarType="square" avatarName="PO_小敏"
        >請把「人才招募系統」需求放到產品待辦清單，並調整待辦的優先度順序。
        我們公司也推薦使用
        <a
          href="https://www.atlassian.com/zh/software/jira"
          target="_blank"
          rel="noreferrer noopener"
          title="Jira"
          class="logo"
        >
          <img src="@/assets/images/common/logo-jira.png" alt="Jira logo" />
        </a>
        來做任務的管理呢！</TheDialog
      >
      <div class="content">
        <div class="todo-block">
          <h3>產品待辦事項(Item)</h3>
          <div class="todo-wrap">
            <div class="todo-item">
              後台職缺管理功能(資訊上架、下架、顯示應徵者資料)
            </div>
            <div class="todo-item">會員系統(登入、註冊、權限管理)</div>
            <div class="todo-item">應徵者的線上履歷編輯器</div>
            <div class="todo-item">前台職缺列表、應徵</div>
          </div>
        </div>
        <div ref="arrow" class="arrow"></div>
        <div class="backlog-block">
          <h3>產品待辦清單(Product Backlog)</h3>
          <div class="backlog-wrap">
            <span class="priority">優先度高</span>
            <div class="backlog-item"></div>
            <div class="backlog-item"></div>
            <div class="backlog-item"></div>
            <div class="backlog-item"></div>
            <span class="priority">優先度低</span>
          </div>
        </div>
      </div>
    </div>
    <TheButton @click="goNextStep" :disabled="isBtnDisabled"
      >我完成了</TheButton
    >
  </section>
</template>

<script>
import lottie from 'lottie-web'
import TheDialog from '@/components/TheDialog'
import TheButton from '@/components/TheButton'

export default {
  components: {
    TheDialog,
    TheButton
  },
  data() {
    return {
      isBtnDisabled: true
    }
  },
  methods: {
    initLottie() {
      lottie.loadAnimation({
        container: this.$refs.arrow,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'lottie/arrow.json'
      })
    },
    goNextStep() {
      this.$store.commit('SET_CURRENT_STEP', 1)
    }
  },
  mounted() {
    this.initLottie()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

section {
  align-items: flex-start;
}
.container {
  margin-top: 5%;
}
.logo {
  display: inline-block;
  background-color: #fff;
  padding: 2px 12px;
  margin: 0 4px;
  box-shadow: 0px 0px 5px 2px rgba(51, 51, 51, 0.25);
  border-radius: 5px;
  vertical-align: middle;
  transition-duration: 0.2s;
  &:hover {
    box-shadow: 0px 0px 10px 2px rgba(96, 199, 184, 0.8);
  }
  img {
    display: inline-block;
    height: 24px;
  }
}
.content {
  display: flex;
  justify-content: center;
  column-gap: 40px;
  margin-top: 50px;
}
.arrow {
  width: 80px;
}
h3 {
  font-size: 28px;
  font-weight: 700;
}
.todo-block {
  width: calc((100% - 160px) / 2);
}
.todo-wrap {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-top: 42px;
}
.todo-item {
  background-color: #fff;
  font-size: 20px;
  line-height: 1.2;
  padding: 20px;
  border: $border;
  box-shadow: 6px 6px 0 $green;
}
.backlog-block {
  width: calc((100% - 160px) / 2);
}
.backlog-wrap {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  background-color: #fff;
  border: $border;
  padding: 16px 50px;
  margin-top: 10px;
}
.backlog-item {
  width: 100%;
  height: 70px;
  border: $border-dashed;
}
.priority {
  display: block;
  font-size: 20px;
  font-weight: 700;
  color: $green;
  text-align: center;
}
</style>
