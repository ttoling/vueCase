import Vue from 'vue';
//引入路由
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter);


//import 会静态编译  require 动态编译
// 引入一堆组件
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Reg from '../pages/Reg.vue';
import Detail from '../pages/Detail.vue';
import User from '../pages/User.vue';
import Follow from '../pages/Follow.vue';
import Rank from '../pages/Rank.vue';
import Start from '../pages/Start.vue';
import Recommend from '../pages/Recommend.vue';
import Special from '../pages/Special.vue';
import ErrorPage from '../components/Error.vue';
// routes==多个路由的配置
let routes = [
  {path:'/home',component:Home},//一条路由叫route
  {path:'/login',component:Login},
  {path:'/reg',component:Reg},
  {path:'/user',component:User},
  {path:'/follow',component:Follow},
  {path:'/rank',component:Rank},
  {path:'/recommend',component:Recommend},
  {path:'/special',component:Special},
  {path:'/start',component:Start},//路由跳转
  {path:'/detail/:aid',name:'detail',component:Detail,props:(route)=>({aid:route.params.aid,dataName:route.query.dataName})},
  {path:'/',redirect:'/start'},//路由跳转
  {path:'*',component:ErrorPage},
  
];
// 控制浏览器跳转的是router对象
let router = new VueRouter({
  // routes:Array,//routes接收一个数组，上面的routes就是一个数组
  routes:routes
}) 
// export default 对象|类|函数
export default router;
