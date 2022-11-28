<template>
  <section>
    <div class="container">
      <TheDialog avatarType="circle-1" avatarName="開發_小斯"
        >那你來試試看，在這經典的Scrum流程圖中，這些流程分別代表哪一個會議呢？
      </TheDialog>
      <img
        src="@/assets/images/step7/background.svg"
        class="background"
        alt="Scrum 流程圖"
      />
      <div ref="blank1" class="blank blank-1"></div>
      <div class="row-blank">
        <div ref="blank2" class="blank blank-2"></div>
        <div ref="blank3" class="blank blank-3"></div>
      </div>
      <div ref="meetingList" class="meeting-wrap">
        <div
          v-for="item in meetingList"
          :key="item.english"
          :data-position="item.position"
          class="meeting-item"
        >
          {{ item.name }}
          <span>({{ item.english }})</span>
        </div>
      </div>
    </div>
  </section>
  <TheButton @click="goNextStep" :disabled="isBtnDisabled">我完成了</TheButton>
  <ThePopup
    v-if="isShowPopup"
    @handle-confirm="handleConfirm"
    @handle-close="handleClose"
    :type="popupData.type"
    >{{ popupData.text }}</ThePopup
  >
</template>

<script>
import Sortable from 'sortablejs'
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
      meetingList: [
        { name: '每日站立會議', english: 'Daily Scrum', position: 1 },
        { name: '短衝檢視會議', english: 'Sprint Review', position: 2 },
        { name: '短衝自省會議', english: 'Sprint Retrospective', position: 3 }
      ],
      blank1List: [],
      blank2List: [],
      blank3List: [],
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
      if (
        this.blank1List.length &&
        this.blank2List.length &&
        this.blank3List.length
      ) {
        return false
      }
      return true
    }
  },
  methods: {
    initSortable() {
      const vm = this
      const blank1 = Sortable.create(this.$refs.blank1, {
        group: 'meeting',
        sort: true,
        disabled: true,
        animation: 150,
        dataIdAttr: 'data-position',
        chosenClass: 'chosen',
        onChange() {
          vm.blank1List = blank1.toArray()
        }
      })
      const blank2 = Sortable.create(this.$refs.blank2, {
        group: 'meeting',
        sort: true,
        disabled: true,
        animation: 150,
        dataIdAttr: 'data-position',
        chosenClass: 'chosen',
        onChange() {
          vm.blank2List = blank2.toArray()
        }
      })
      const blank3 = Sortable.create(this.$refs.blank3, {
        group: 'meeting',
        sort: true,
        disabled: true,
        animation: 150,
        dataIdAttr: 'data-position',
        chosenClass: 'chosen',
        onChange() {
          vm.blank3List = blank3.toArray()
        }
      })
      Sortable.create(this.$refs.meetingList, {
        group: 'meeting',
        sort: true,
        animation: 150,
        chosenClass: 'chosen',
        onChoose(event) {
          const position = event.item.dataset.position
          switch (position) {
            case '1':
              blank1.options.disabled = false
              blank2.options.disabled = true
              blank3.options.disabled = true
              break
            case '2':
              blank1.options.disabled = true
              blank2.options.disabled = false
              blank3.options.disabled = true
              break
            case '3':
              blank1.options.disabled = true
              blank2.options.disabled = true
              blank3.options.disabled = false
              break
            default:
              break
          }
        }
      })
    },
    goNextStep() {
      this.isShowPopup = true
      this.isSuccess = true
      this.popupData.type = 'success'
      this.popupData.text = '太棒了！挑戰成功！'
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
    this.initSortable()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

section {
  overflow: hidden;
}
.container {
  position: relative;
  margin-top: 2%;
  margin-bottom: 2%;
}
.background {
  width: 100%;
}
.blank {
  min-width: 250px;
  min-height: 100px;
  padding: 4px 10px 10px 4px;
  background-color: #fff;
  border: $border-dashed;
  &.blank-1 {
    position: absolute;
    right: 45%;
    top: 240px;
  }
  .meeting-item {
    position: static;
  }
}
.row-blank {
  display: flex;
  column-gap: 3vw;
  position: absolute;
  right: 20%;
  bottom: 0;
}
.meeting-wrap {
  position: absolute;
  right: 5%;
  top: 20%;
  width: fit-content;
  height: 315px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  z-index: 5;
}
.meeting-item {
  position: relative;
  background-color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  padding: 20px;
  border: $border;
  box-shadow: 6px 6px 0 $green;
  user-select: none; /* standard syntax */
  -webkit-user-select: none; /* for Chrome、Safari */
  -moz-user-select: none; /* for Mozilla、Firefox */
  transition-duration: 0.2s;
  cursor: move;
  &:hover {
    background-color: $green;
    box-shadow: 6px 6px 0 $black;
  }
  &.chosen {
    background-color: #fff;
    box-shadow: 6px 6px 0 $yellow;
  }
  &:nth-child(odd) {
    right: 100px;
  }
  span {
    display: block;
    font-size: 18px;
  }
}
</style>
