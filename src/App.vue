<template>
  <div id="app">
    <el-addition-select
      v-model="valueList"
      :leftOption="leftOption"
      :rightOption="rightOption"
    ></el-addition-select>
    <el-button @click="handleShowField">显示字段</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valueList: [
        {
          leftValue: '',
          rightValue: ''
        }
      ],
      leftOption: [
        {
          key: 'field',
          value: 'field',
          name: 'field'
        }
      ],
      rightOption: [
        {
          key: 'field1',
          value: 'field1',
          name: 'field1'
        }
      ]
    }
  },
  methods: {
    handleShowField() {
      console.log('valueList: ', this.valueList)
    }
  }
}
</script>

<style></style>
