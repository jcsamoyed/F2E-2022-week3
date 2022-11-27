<template>
  <section>
    <div class="container">
      <TheDialog avatarType="circle-2" avatarName="開發_小廣"
        >請依據一個短衝(sprint)不能超過20點為原則，將產品待辦清單(Product
        Backlog)拖曳至TT開發短衝清單(Sprint Backlog)吧！</TheDialog
      >
      <div class="content">
        <div class="todo-block">
          <h3>產品待辦清單(Product Backlog)</h3>
          <div class="todo-container">
            <span class="priority">優先度高</span>
            <div ref="todoList" class="todo-wrap">
              <div
                v-for="item in todoList"
                :key="item.id"
                :data-id="item.id"
                :data-point="item.point"
                class="todo-item"
              >
                {{ item.name }}
              </div>
            </div>
            <span class="priority">優先度低</span>
          </div>
        </div>
        <div ref="arrow" class="arrow"></div>
        <div class="backlog-block">
          <h3>TT開發短衝清單(Sprint Backlog)</h3>
          <div class="backlog-wrap">
            <div class="point-box">
              <span class="current" :class="{ error: currentPoint > 20 }">{{
                currentPoint
              }}</span>
              / 20
            </div>
            <div ref="backlogList" class="backlog-list"></div>
          </div>
        </div>
      </div>
      <TheButton @click="goNextStep" :disabled="isBtnDisabled"
        >開始Sprint！</TheButton
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
  computed: {
    isBtnDisabled() {
      if (this.backlogList.length) {
        return false
      }
      return true
    }
  },
  data() {
    return {
      todoList: [
        {
          id: 2,
          name: '會員系統(登入、註冊、權限管理)',
          point: 8
        },
        {
          id: 4,
          name: '前台職缺列表、應徵',
          point: 3
        },
        {
          id: 3,
          name: '應徵者的線上履歷編輯器',
          point: 13
        },
        {
          id: 1,
          name: '後台職缺管理功能(資訊上架、下架、顯示應徵者資料)',
          point: 8
        }
      ],
      backlogList: [],
      currentPoint: 0,
      isShowPopup: false,
      isSuccess: false,
      popupData: {
        type: 'warning',
        text: null
      }
    }
  },
  watch: {
    currentPoint(newValue, oldValue) {
      if (newValue > 20 && newValue > oldValue) {
        this.popupData.type = 'warning'
        this.isSuccess = false
        this.isShowPopup = true
        this.popupData.text = 'Oops...超過20點囉！再試一次！'
      }
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
    initSortable() {
      const vm = this
      Sortable.create(this.$refs.todoList, {
        group: 'todoBacklog',
        sort: true,
        animation: 150,
        chosenClass: 'chosen'
      })
      const backlogList = Sortable.create(this.$refs.backlogList, {
        group: 'todoBacklog',
        sort: true,
        animation: 150,
        dataIdAttr: 'data-point',
        chosenClass: 'chosen',
        onChange() {
          vm.backlogList = backlogList.toArray()
        },
        onAdd() {
          vm.currentPoint = vm.backlogList
            .map((item) => parseInt(item, 10))
            .reduce((a, b) => a + b, 0)
        },
        onRemove() {
          vm.backlogList = backlogList.toArray()
          vm.currentPoint = vm.backlogList
            .map((item) => parseInt(item, 10))
            .reduce((a, b) => a + b, 0)
        }
      })
    },
    goNextStep() {
      this.popupData.type = 'warning'
      this.isSuccess = false
      this.isShowPopup = true
      if (this.currentPoint <= 3) {
        this.popupData.text = '還沒填答完成，請再接再厲繼續挑戰！'
        return
      }
      if (this.currentPoint > 20) {
        this.popupData.text = 'Oops...超過20點囉！再試一次！'
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
    this.initSortable()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.container {
  margin-top: 2%;
}
.content {
  display: flex;
  justify-content: center;
  column-gap: 40px;
  margin-top: 40px;
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
.todo-container {
  margin-top: 20px;
}
.priority {
  display: block;
  font-size: 20px;
  font-weight: 700;
  color: $green;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
}
.todo-wrap {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  min-height: 328px;
}
.todo-item {
  position: relative;
  background-color: #fff;
  font-size: 20px;
  line-height: 1.2;
  padding: 20px;
  border: $border;
  box-shadow: 6px 6px 0 $green;
  cursor: move;
  &.chosen {
    box-shadow: 6px 6px 0 $yellow;
  }
  &::after {
    content: attr(data-point);
    position: absolute;
    right: -25px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #fff;
    color: $green;
    text-align: center;
    width: 50px;
    height: 50px;
    padding: 10px;
    border: $border;
    border-radius: 50px;
    box-sizing: border-box;
  }
}
.backlog-block {
  width: calc((100% - 160px) / 2);
}
.backlog-wrap {
  background-color: #fff;
  border: $border;
  padding: 30px;
  padding-top: 16px;
  margin-top: 10px;
}
.point-box {
  font-size: 24px;
  font-weight: 700;
  color: $yellow;
  text-align: center;
  margin-bottom: 16px;
  .current {
    color: $green;
    &.error {
      color: $pink;
    }
  }
}
.backlog-list {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 16px;
  padding-right: 28px;
  width: 100%;
  min-height: 360px;
  border: $border-dashed;
}
</style>
