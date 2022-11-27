<template>
  <main>
    <component :is="`TheStep${currentStep}`"></component>
  </main>
</template>

<script>
import TheStep1 from '@/views/TheStep1.vue'
import TheStep2 from '@/views/TheStep2.vue'
import TheStep3 from '@/views/TheStep3.vue'
import TheStep4 from '@/views/TheStep4.vue'
import TheStep5 from '@/views/TheStep5.vue'

export default {
  name: 'HomeView',
  components: {
    TheStep1,
    TheStep2,
    TheStep3,
    TheStep4,
    TheStep5
  },
  computed: {
    currentStep() {
      return this.$store.state.currentStep
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  height: calc(100vh - 60px);
  background-repeat: no-repeat;
  background-image: url(@/assets/images/common/bg-1.svg),
    url(@/assets/images/common/bg-2.svg), url(@/assets/images/common/bg-3.svg),
    url(@/assets/images/common/bg-4.svg);
  background-position: bottom 50% left 0, bottom 18px left 16px,
    bottom 84px right 0, top 16px right 0;
}
</style>
