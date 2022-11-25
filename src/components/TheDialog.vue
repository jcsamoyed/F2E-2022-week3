<template>
  <div class="row">
    <div v-if="avatarType" class="avatar-wrap" :class="avatarType">
      <img class="avatar" :src="avatarImage" :alt="avatarName" />
      <span>{{ avatarName }}</span>
    </div>
    <div v-else class="empty"></div>
    <img
      v-if="isShowArrow"
      class="arrow"
      src="@/assets/images/common/arrow.svg"
      alt="箭頭"
    />
    <div class="border">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatarType: String,
    avatarName: String,
    isShowArrow: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    avatarImage() {
      return require(`@/assets/images/common/avatar-${this.avatarType}.svg`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.row {
  display: flex;
  margin-bottom: 24px;
  align-items: center;
  &:last-child {
    margin-bottom: unset;
  }
}
.avatar-wrap {
  flex-shrink: 0;
  width: 95px;
  text-align: center;
  .avatar {
    width: 80px;
  }
  span {
    display: block;
    font-size: 16px;
    margin-top: 20px;
  }
  &.square {
    span {
      margin-top: 13px;
    }
  }
}
.empty {
  flex-shrink: 0;
  width: 95px;
}
.arrow {
  width: 20px;
  margin: 0 20px;
}
.border {
  width: 100%;
  background-color: #fff;
  border: $border;
  font-size: 20px;
  line-height: 1.5;
  padding: 20px;
  box-shadow: 6px 6px 0 $black;
}
</style>
