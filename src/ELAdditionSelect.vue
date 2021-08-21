<template>
  <div class="--addition-select">
    <el-button icon="el-icon-plus" @click="handleAddItem"></el-button>
    <div>
      <div v-for="(item, index) in valueList" :key="index">
        <el-select v-model="item.field">
          <el-option
            v-for="item in fieldOption"
            :key="item.key"
            :value="item.value"
            :label="item.label"
          ></el-option>
        </el-select>
        <el-select class="--addition-select-left-item" v-model="item.condition">
          <el-option
            v-for="item in conditionOption"
            :key="item.key"
            :value="item.value"
            :label="item.label"
          ></el-option>
        </el-select>
        <span>（选择条件）</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valueList: [
        {
          field: '',
          condition: ''
        },
        {
          field: '',
          condition: ''
        }
      ],
      fieldOption: [
        {
          key: 'field_1',
          value: 'field_1',
          label: '字段1'
        },
        {
          key: 'field_2',
          value: 'field_2',
          label: '字段2'
        }
      ],
      conditionOption: [
        {
          key: 'or',
          value: 'or',
          label: '或者'
        },
        {
          key: 'and',
          value: 'and',
          label: '并且'
        }
      ]
    }
  },
  methods: {
    handleAddItem() {
      this.valueList.push({
        field: '',
        condition: ''
      })
    }
  }
}
</script>

<style scoped>
.--addition-select {
  display: flex;
  align-items: flex-start;
}

.--addition-select-left-item {
  width: 84px;
}
</style>
