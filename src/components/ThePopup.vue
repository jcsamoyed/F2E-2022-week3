<template>
  <section class="popup-background">
    <div class="popup-window">
      <img
        src="@/assets/images/common/popup-close.svg"
        @click="handleClose"
        alt="關閉"
        class="close"
      />
      <img class="avatar" :src="typeImage" :alt="type" />
      <p>
        <slot></slot>
      </p>
      <div class="btn-wrap">
        <TheButton @click="handleConfirm" type="popup">{{ btnText }}</TheButton>
      </div>
    </div>
  </section>
</template>

<script>
import TheButton from '@/components/TheButton'

export default {
  components: {
    TheButton
  },
  props: {
    type: {
      // 用於區分 Avatar 圖片，可選 'warning', 'success'
      type: String,
      default: 'warning'
    },
    btnText: {
      type: String,
      default: '確定'
    }
  },
  data() {
    return {
      isShowPopup: true
    }
  },
  computed: {
    typeImage() {
      return require(`@/assets/images/common/popup-avatar-${this.type}.svg`)
    }
  },
  methods: {
    handleClose() {
      this.$emit('handle-close')
    },
    handleConfirm() {
      this.$emit('handle-confirm')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.popup-background {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 100;
}
.popup-window {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  max-width: 860px;
  background-color: #fff;
  padding: 70px;
  border: $border;
  text-align: center;
}
.close {
  position: absolute;
  top: 25px;
  right: 25px;
  cursor: pointer;
  transition-duration: 0.2s;
  &:hover {
    opacity: 0.5;
  }
}
.avatar {
  display: block;
  width: 156px;
  margin: 0 auto;
}
p {
  font-size: 20px;
  font-weight: 500;
  margin-top: 32px;
  margin-bottom: 50px;
}
.btn-wrap {
  display: flex;
  justify-content: center;
  column-gap: 40px;
}
</style>
