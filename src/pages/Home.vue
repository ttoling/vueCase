<template>
  <div class='home'>
    <Swiper :Slist="$store.state.banner"></Swiper>
    <List :list="$store.state.home" :dataName="'home'"></List>
  </div>
</template>
<script>
    // 引入轮播图和list组件
    import Swiper from "../components/Swiper";
    import List from "../components/List";
    import * as types from '../store/types.js'
    export default {
      components: {Swiper,List},// 注册轮播图和list组件
    
      activated(){
        this.$store.dispatch(types.UPDATE_HOME)
        this.$store.dispatch(types.UPDATE_BANNER)
      }
     
    }

</script>



