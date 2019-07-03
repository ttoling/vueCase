<template>
  <div class='home'>
    <Swiper :Slist="banner"></Swiper>
    <List :list="home" :dataName="'home'"></List>
  </div>
</template>
<script>
console.log("home")
    // 引入轮播图和list组件
    import Swiper from "../components/Swiper";
    import List from "../components/List";
    import * as types from '../store/types.js'
    import {mapGetters} from 'vuex'
    export default {
      components: {Swiper,List},// 注册轮播图和list组件
    
      mounted(){
        this.$store.dispatch(types.UPDATE_HOME)
        this.$store.dispatch(types.UPDATE_BANNER)
        
        console.log(this.$store.state.home,this.$store.state.banner)
      },
      computed:mapGetters([
        'home','banner'
      ])
      
     
    }

</script>



