import App from './App.vue'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ElAdditionSelect from '../lib/index'

Vue.use(ElementUI, { size: 'mini' })
Vue.use(ElAdditionSelect)

new Vue({
  render: h => h(App)
}).$mount('#app')
