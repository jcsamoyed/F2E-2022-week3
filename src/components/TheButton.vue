<template>
  <button :class="type" :disabled="disabled">
    <span class="inner">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      // 用於區分按鈕用途，可選 'next', 'popup'
      type: String,
      default: 'next'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.next {
  position: absolute;
  bottom: 36px;
  right: 36px;
}
button {
  width: 335px;
  background-color: $black;
  border: none;
  padding: 0;
  cursor: pointer;
  &:hover {
    .inner {
      background-color: $yellow-light;
    }
  }
  &:disabled {
    cursor: not-allowed;
    .inner {
      background-color: $yellow-dark;
    }
    &:active {
      .inner {
        background-color: $yellow-dark;
        transform: translate3d(-6px, -6px, 0);
      }
    }
  }
  &:active {
    .inner {
      background-color: $yellow-light;
      transform: translate3d(0, 0, 0);
      transition: transform 120ms cubic-bezier(0.23, 1, 0.32, 1);
    }
  }
}
.inner {
  display: block;
  width: 100%;
  background-color: $yellow;
  color: $black;
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
  border: $border;
  padding: 11px;
  transform: translate3d(-6px, -6px, 0);
  transition: transform 240ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 220ms,
    background-color 240ms;
}
</style>
