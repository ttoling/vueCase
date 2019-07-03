import Vue from 'vue';
import axios from 'axios';
// Vue.use(axios);axios不支持use安装

import store from './store'
import { VIEW_LOADING} from '../store/types'


//拦截器
//请求时
axios.interceptors.request.use(function (config){
  //在请求之前做的事
  // config.headers = {'Content-Type':'xxxx'}//添加请求头
  // console.log('loading显示')
  store.dispatch(VIEW_LOADING,true)//显示loading
  return config;
},function(error){
  //发送错误请求时要做的事
  return Promise.reject(error);
});

//数据返回时
axios.interceptors.response.use(function(response){
  // console.log('loading消失')
  store.dispatch(VIEW_LOADING,false)//请求的数据返回时loading消失
  return response;
},function(error){
  //数据请求失败，返回错误信息
  return Promise.reject(error);
  console.log('axios',error)
});

Vue.prototype.$axios = axios;//把axios添加到Vue的父级上，在组件里面可以通过：this.$axios使用;
window.axios = axios;// 把axios添加到Window上，非组件里面通过axios()使用


export default axios;// 组件，非组件里面都可以axios()