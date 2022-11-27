<template>
  <section>
    <div class="container">
      <TheDialog avatarType="circle-1" avatarName="開發_小斯"
        >哇賽新來的，你真的很幸運，今天剛好是開發 B 組的
        Retro，你也來見識一下，看看 Retro 都該做些什麼吧～～
        我們會在會議裡請團隊成員提出哪些是做得好的地方、哪些可以繼續改善的地方，並記錄在
        <a
          href="https://www.atlassian.com/wac/software/confluence"
          target="_blank"
          rel="noreferrer noopener"
          title="Confluence"
          class="logo"
        >
          <img
            src="@/assets/images/common/logo-confluence.png"
            alt="Confluence logo"
          />
        </a>
        中。Retro 重點在於「正面表述」，你也思考看看，哪一些是適合 Retro
        的回饋吧～～
      </TheDialog>
      <div class="content">
        <div class="retro-wrap">
          <h3>做得好的地方</h3>
          <div ref="arrow1" class="arrow"></div>
          <div class="option">
            <label
              ><input
                type="radio"
                :value="1"
                v-model="form.retro1"
              />這次我幫了很多人救火耶！</label
            >
            <label
              ><input
                type="radio"
                :value="2"
                v-model="form.retro1"
              />大家開發上都會互相 cover，讓任務都有準時在時間內完成。</label
            >
          </div>
        </div>
        <div class="retro-wrap">
          <h3>有哪些可以做得更好？</h3>
          <div ref="arrow2" class="arrow"></div>
          <div class="option">
            <label
              ><input
                type="radio"
                :value="1"
                v-model="form.retro2"
              />可以記錄這次的開發時間，讓預估團隊點數可以更精準。</label
            >
            <label
              ><input
                type="radio"
                :value="2"
                v-model="form.retro2"
              />開發時間預估不準確，請後端下此改進，避免 delay 到我。</label
            >
          </div>
        </div>
      </div>
      <TheButton @click="goNextStep" :disabled="isBtnDisabled"
        >我完成了</TheButton
      >
    </div>
  </section>
  <ThePopup
    v-if="isShowPopup"
    @handle-confirm="handleConfirm"
    @handle-close="handleClose"
    :type="popupData.type"
    >{{ popupData.text }}</ThePopup
  >
</template>

<script>
import lottie from 'lottie-web'
import TheDialog from '@/components/TheDialog'
import ThePopup from '@/components/ThePopup'
import TheButton from '@/components/TheButton'

export default {
  components: {
    TheDialog,
    ThePopup,
    TheButton
  },
  data() {
    return {
      form: {
        retro1: 0,
        retro2: 0
      },
      isShowPopup: false,
      isSuccess: false,
      popupData: {
        type: 'warning',
        text: null
      }
    }
  },
  computed: {
    isBtnDisabled() {
      if (this.form.retro1 && this.form.retro2) {
        return false
      }
      return true
    }
  },
  methods: {
    initLottie() {
      lottie.loadAnimation({
        container: this.$refs.arrow1,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'lottie/arrow.json'
      })
      lottie.loadAnimation({
        container: this.$refs.arrow2,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'lottie/arrow.json'
      })
    },
    goNextStep() {
      this.popupData.type = 'warning'
      this.isSuccess = false
      this.isShowPopup = true
      if (this.form.retro1 !== 2 || this.form.retro2 !== 1) {
        this.popupData.text = 'Oops...選錯囉！再試一次！'
        return
      }
      this.popupData.type = 'success'
      this.popupData.text = '太棒了！挑戰成功！'
      this.isSuccess = true
    },
    handleConfirm() {
      this.isShowPopup = false
      if (this.isSuccess) {
        this.$store.commit('SET_CURRENT_STEP', 1)
      }
    },
    handleClose() {
      this.isShowPopup = false
    }
  },
  mounted() {
    this.initLottie()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.container {
  margin-top: 2%;
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
.content {
  display: flex;
  flex-direction: column;
  row-gap: 80px;
  margin-top: 80px;
}
.retro-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 30px;
}
h3 {
  width: calc(90% - 60% - 80px - 60px);
  font-size: 28px;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
}
.arrow {
  width: 80px;
}
.option {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 60%;
}
label {
  background-color: #fff;
  font-size: 20px;
  line-height: 1.2;
  padding: 20px;
  border: solid 3px #333;
  box-shadow: 6px 6px 0 #60c7b8;
  transition-duration: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: $green;
    box-shadow: 6px 6px 0 $black;
  }

  input {
    position: relative;
    display: inline-block;
    width: 0;
    margin: 0;
    margin-right: 40px;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      box-sizing: border-box;
      border: $border;
      border-radius: 100px;
    }
    &:checked {
      &::before {
        background-color: $yellow;
      }
    }
  }
}
</style>
