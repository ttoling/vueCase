<template>
  <div id="app">
    <keep-alive>
      <div v-show="bLoading" class="loading"><img src="./assets/images/loading.gif" alt=""></div>
    </keep-alive>
    <Header v-show="bNav"></Header>
 
    <router-view></router-view>
    
    <Footer v-show="bFoot"></Footer>
  </div>
</template>

<script>
// 一个组件包含三个标签：template模板,script脚本,style样式,
//导入
// 打造变量的几种方式：var let const function class import
// import 组件名 from 资源地址
// 导入header/footer组件，导入到app里的组件，其下面的所有组件都会有
import Header from './components/Header'
import Footer from './components/Footer'
import {mapGetters} from 'vuex'
import * as types from './store/types.js'

export default {//es6的导出，可以导出函数，类，对象
  name: 'app',
  components: {
    Header,Footer
  },
  watch:{//数据监测
    $route:{
      handler(to){
        let path = to.path;
        if(/home|column|start|special|recommend/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,true);
          this.$store.dispatch(types.VIEW_FOOT,true);
        }
        if(/user|rank|follow/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,false);
          this.$store.dispatch(types.VIEW_FOOT,true);
        }
        if(/start|login|reg|detail/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,false);
          this.$store.dispatch(types.VIEW_FOOT,false);
        }
      },
      // immediate:true代表如果在 wacth 里声明了之后，就会立即先去执行里面的handler方法，如果为 false就跟我们以前的效果一样，不会在绑定的时候就执行
      immediate:true
    },
  },
  computed:mapGetters([
    'bNav','bFoot','bLoading'
  ]),
  destroyed(){
    
  }
}
</script>

<style>
  .loading{position: fixed;left: 0;top: 0;z-index: 999;width: 4rem;height: 4rem;right: 0;bottom: 0;margin: auto;}
  .loading img{width: 100%;height: 100%;}
</style>
