<template>
  <div class="--addition-select">
    <el-button
      class="--addition-select-plus-btn"
      icon="el-icon-plus"
      @click="handleAddItem"
      circle
    ></el-button>
    <div>
      <div
        v-for="(item, index) in valueList"
        :key="'--addition-select-item' + index"
        class="--addition-select-item"
      >
        <el-select v-model="item.leftValue">
          <el-option
            v-for="item in leftOption"
            :key="item.key"
            :value="item.value"
            :label="item.label"
          ></el-option>
        </el-select>
        <el-select class="--addition-select-item-left" v-model="item.rightValue">
          <el-option
            v-for="item in rightOption"
            :key="item.key"
            :value="item.value"
            :label="item.label"
          ></el-option>
        </el-select>
        <el-button icon="el-icon-delete" circle @click="handleDelItem(index)"></el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElAdditionSelect',
  props: {
    value: {
      type: Array,
      default: () => [
        {
          leftValue: '',
          rightValue: ''
        }
      ]
    },
    leftOption: {
      type: Array,
      default: () => []
    },
    rightOption: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  computed: {
    valueList: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    handleAddItem() {
      this.valueList.push({
        leftValue: '',
        rightValue: ''
      })
    },
    handleDelItem(index) {
      this.valueList.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.--addition-select {
  display: flex;
  align-items: flex-start;
}

.--addition-select-plus-btn {
  margin-right: 10px;
}

.--addition-select-item {
  margin-bottom: 10px;
}

.--addition-select-item-left {
  width: 86px;
}
</style>
