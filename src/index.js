import ELAdditionSelect from './ELAdditionSelect.vue'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, { size: 'mini' })

// export { ELAdditionSelect }

// export default {
//   install(Vue) {
//     Vue.component('el-addition-select', ELAdditionSelect)
//   }
// }
new Vue({
  render: h => h(ELAdditionSelect)
}).$mount('#app')
