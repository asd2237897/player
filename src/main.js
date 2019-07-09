import Vue from 'vue'
import App from './App.vue'

//导入样式
import './assets/css/iconfont.css'
import './assets/css/index.css'

Vue.config.productionTip = false

//饿了吗ui组件
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUi)

//axios组件
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'https://autumnfish.cn';
Vue.use(axios)

//路由相关组件
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入路由组件
import slider from './components/slider.vue'
import results from './components/results.vue'
import player from './components/player.vue'
import video from './components/video.vue'
import comment from './components/comment.vue'

//日期格式组件
import moment from 'moment'
Vue.use(moment)

//全局过滤器
Vue.filter(`formatSinger`, (value) => {
  let temStr = '';
  for (let i = 0; i < value.length; i++) {
    temStr += value[i].name;
    if (i < value.length - 1) {
      temStr += "/";
    }
  }
  return temStr
})
Vue.filter('gettime',(value)=>{
  return moment(value).format('YYYY年MM月DD日')
})

const routes = [{
    path: '/',
    redirect: '/slider'
  },
  {
    path: '/slider',
    component: slider
  },
  {
    path: '/results/:search',
    component: results
  },
  {
    path: '/player/:id',
    component: player
  },
  {
    path: '/video/:mvid',
    component: video
  },
  {
    path: '/comment/:id',
    component: comment
  },
]
const router = new VueRouter({
  routes
})
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')