<template>
  <section>
    <div class="container">
      <TheDialog avatarType="square" avatarName="PO_小敏"
        >等等等等等，你都還不知道什麼是 Sprint
        吧！讓我先為你介紹一下～仔細聽好唷，等等會考考你！
      </TheDialog>
      <TheDialog avatarType="circle-2" avatarName="開發_小廣"
        >Sprint
        是一個短衝，開發團隊會在這期間執行開發。在這段時間內，開發團隊舉辦<b
          >每日站立會議(Daily Scrum)</b
        >
        ，追蹤成員間的工作狀況。除了每日站立會議，在Sprint的結束也會包含<b
          >短衝檢視會議(Sprint Review)</b
        >
        、<b>短衝自省會議(Sprint Retrospective)</b>。
      </TheDialog>
      <div class="meeting-wrap">
        <div
          @mouseenter="setActiveCard(1)"
          @mouseleave="setActiveCard(0)"
          class="meeting-item"
          :class="{ active: activeCard === 1 }"
        >
          <h3>
            每日站立會議
            <span>(Daily Scrum)</span>
          </h3>
          <div class="detail">
            <p>
              每天都要進行的會議<br />
              以 15 分鐘為限制
            </p>
            <ol>
              <li>昨天為團隊的短衝目標(Sprint Goal)做了哪些進度</li>
              <li>今天我會如何準備來幫助團隊達到短衝目標</li>
              <li>過程中有遇到什麼問題、難題</li>
            </ol>
            <p>透過團隊分享，追蹤大家的工作狀況。</p>
          </div>
        </div>
        <div
          @mouseenter="setActiveCard(2)"
          @mouseleave="setActiveCard(0)"
          class="meeting-item"
          :class="{ active: activeCard === 2 }"
        >
          <h3>
            短衝檢視會議
            <span>(Sprint Review)</span>
          </h3>
          <div class="detail">
            <p>
              用來檢視該次短衝增量的成果<br />
              以蒐集相關的回饋數據或意見
            </p>
          </div>
        </div>
        <div
          @mouseenter="setActiveCard(3)"
          @mouseleave="setActiveCard(0)"
          class="meeting-item"
          :class="{ active: activeCard === 3 }"
        >
          <h3>
            短衝自省會議
            <span>(Sprint Retrospective)</span>
          </h3>
          <div class="detail">
            <p>
              團隊在自省會議裡<br />
              會共同回顧該短衝歷程發生的事情
            </p>
            <ol>
              <li>好的地方</li>
              <li>可以改進的地方</li>
              <li>如何維持我們已有的成功經驗</li>
            </ol>
            <p>
              優化工作流程、讓團隊有變得更好的機會。<br />
              推薦工具：
              <a
                href="https://www.atlassian.com/wac/software/confluence"
                target="_blank"
                rel="noreferrer noopener"
                title="Confluence"
                class="logo"
              >
                <img
                  src="@/assets/images/common/logo-confluence.png"
                  alt="Jira logo"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <TheButton @click="goNextStep">我了解了</TheButton>
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
  data() {
    return {
      activeCard: 0
    }
  },
  methods: {
    setActiveCard(num) {
      this.activeCard = num
    },
    goNextStep() {
      this.$store.commit('SET_CURRENT_STEP', 1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

section {
  align-items: center;
}
b {
  font-weight: 700;
  color: $green;
}
.meeting-wrap {
  display: flex;
  justify-content: center;
  column-gap: 30px;
  margin-top: 60px;
}
.meeting-item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 300px;
  padding: 24px 16px;
  background-color: #fff;
  border: $border;
  border-radius: 16px;
  box-shadow: 6px 6px 0 $black;
  transition-duration: 0.2s;
  &:hover {
    background-color: $yellow;
  }
  &.active {
    width: 50%;
    h3 {
      opacity: 0;
    }
    .detail {
      opacity: 1;
    }
  }
}
h3 {
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  transition-duration: 0.2s;
  span {
    display: block;
    font-size: 20px;
    margin-top: 8px;
  }
}
.detail {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  transition-duration: 0.2s;
  opacity: 0;
}
ol {
  list-style-type: decimal;
  margin: 10px 0 10px 24px;
}
.logo {
  display: inline-block;
  background-color: #fff;
  padding: 2px 12px;
  margin: 4px;
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
</style>
