//main.js程序主入口
import Vue from 'vue'//引入vue
import App from './App.vue'//引入app.vue组件

Vue.config.productionTip = false;
//引入全局样式 02基础样式，相当于public.css
import './assets/css/base.css' //自我执行

//引入全局js 02，字体样式换算成rem，控制字体
import './assets/js/font' //自我执行

//引入路由的配置
import router from './plugins/router';
//引入axios插件对象
import axios from './plugins/axios';
//配置前端baseUrl
Vue.prototype.baseUrl = require('../config/config').active;
//引入状态管理配置
import store from './plugins/store'

//强制刷新时同步state localStorage
let local = JSON.parse(window.localStorage.getItem('vueCase_user'))
if(!local) local = {err:1}
store.commit('UPDATE_USER',local)


//全局引入轮播图插件
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// // import 'swiper/dist/css/swiper.css'
// Vue.use(VueAwesomeSwiper)
//全局引入动画样式
import 'animate.css';


new Vue({
  data:{
    // 这两个布尔值决定组件内是否使用header和footer
    bNav:false,
    bFoot:false
  },
  render: h => h(App),
  // router:router//可简写成如下↓↓↓
  router,
  store
}).$mount('#app')
