<template>
  <section>
    <div class="container">
      <TheDialog avatarType="square" avatarName="PO_小敏"
        >產品待辦清單好了之後，我們來召集 Scrum Master
        和開發團隊共同召開短衝規劃會議(Sprint
        Planning)。短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完成哪些工作事項來達到商業需求，列出短衝待辦清單(Sprint
        Backlog)，並由開發團隊在接下來的產品開發週期裡執行。</TheDialog
      >
      <TheDialog avatarType="triangle" avatarName="SM_小捷"
        >嗨嗨 你是新來的前端吧！我是這次的 Scrum Master (SM)
        小捷，我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議，提升團隊成員對
        Scrum 瞭解。這兩位是小斯和小廣，是我們開發團隊的成員唷~ 目前我們團隊
        <b
          >一次 Sprint 週期是兩週的時間，依照我的觀察，目前團隊可以負擔的點數
          (Sprint Point) 大約是 20 點左右。</b
        >
      </TheDialog>
      <TheDialog avatarType="circle-1" avatarName="開發_小斯"
        >欸新來的，你應該不知道點數是什麼意思吧哈哈！我來跟你介紹一下吧～ Sprint
        Point
        目的是為了衡量速度，是用大概花費的時間預估出的相對點數。</TheDialog
      >
      <TheDialog avatarType="circle-2" avatarName="開發_小廣"
        >沒錯，如同小斯哥說的，我這邊已經把剛剛討論好的點數標上去囉～
        你來練習把任務排到短衝待辦清單吧！By the way， 我們平常管理任務是使用
        <a
          href="https://www.atlassian.com/zh/software/jira"
          target="_blank"
          rel="noreferrer noopener"
          title="Jira"
          class="logo"
        >
          <img src="@/assets/images/common/logo-jira.png" alt="Jira logo" />
        </a>
        這套軟體，你有時間記得先去註冊和熟悉唷👇<br />
        <a
          href="https://ecloudapp2022.atlassian.net"
          target="_blank"
          rel="noreferrer noopener"
          title="Jira"
          class="link"
        >
          https://ecloudapp2022.atlassian.net
        </a>
      </TheDialog>
    </div>
    <TheButton @click="goNextStep">接受挑戰</TheButton>
  </section>
</template>

<script>
import TheDialog from '@/components/TheDialog'
import TheButton from '@/components/TheButton'

export default {
  components: {
    TheDialog,
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
  transition-duration: 0.2s;
  &:hover {
    box-shadow: 0px 0px 10px 2px rgba(96, 199, 184, 0.8);
  }
  img {
    display: inline-block;
    height: 24px;
    vertical-align: sub;
  }
}
b {
  color: $green;
  font-weight: 700;
}
.link {
  color: $black;
  transition-duration: 0.2s;
  &:hover {
    color: $green;
  }
}
</style>
