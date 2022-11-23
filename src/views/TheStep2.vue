<template>
  <section>
    <div class="container">
      <TheDialog avatarType="square" avatarName="PO_小敏"
        >我是 TT 資訊，開發 A 組的 PO，小敏。 PO 也就是產品負責人(Product
        Owner)，產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出產品待辦清單(Product
        Backlog)唷！</TheDialog
      >
      <TheDialog
        >剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。
        既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧！</TheDialog
      >
    </div>
    <TheButton @click="goNextStep">開始挑戰</TheButton>
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

<style lang="scss" scoped></style>
