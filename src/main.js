import Vue from 'vue'
import App from './App.vue'

//导入样式
import './assets/css/iconfont.css'
import './assets/css/index.css'

Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  // {path:'',component:''},
]
const router = new VueRouter({
  routes
})
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
