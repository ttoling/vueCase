<template>
   
  <div class="follow">
    <div class="header">
        <i class="l-btn" @click="goback"></i>
        <h3>关注</h3>
    </div>
    
    <div class="title">
      <ul>
        <router-link tag="li" to="/articleRank" active-class="active"><a href="javascript:;" >全部关注</a></router-link>
        <router-link tag="li" to="/userRank" active-class="active"><a href="javascript:;" >简友圈</a></router-link>
        <router-link tag="li" to="/rankMore" active-class="active" class="more"><a href="javascript:;" >专题</a></router-link>
        <router-link tag="li" to="/rankMore" active-class="active" class="more"><a href="javascript:;" >作者</a></router-link>
        <router-link tag="li" to="/rankMore" active-class="active" class="more"><a href="javascript:;" >文集</a></router-link>
      </ul>
      
    </div>
    <div class="content">
      <List :list="follow" :dadaName="'follow'"></List>
    </div>
  </div>
</template>
<script>
import List from '../components/List'
import {mapGetters} from 'vuex'
export default {
  components:{List},
  methods:{
    goback(){
      this.$router.go(-1)//编程式跳转
    }
  },
  mounted(){
    this.$store.dispatch('UPDATE_FOLLOW')
  },
  computed:mapGetters([
    'follow'
  ])
    
} 
</script>
<style scoped>
  .header .l-btn{background:url(../assets/img/history.png) no-repeat 0 0; background-size:100%;float: left;width:0.29rem;height:0.31rem;margin:0.35rem 0 0 0.38rem;}
  .header h3{height: 1rem;text-align: center;line-height: 1rem;width: 100%;font-size: 0.3rem;font-weight: 400;background:#fff;}
  .title{width:100%; z-index:2;line-height:0.6rem;margin: 0.2rem 0;border-top:0.02rem solid #e6e7e7;border-bottom:0.02rem solid #e6e7e7;}
  .title ul{width:100%;height:0.6rem;background:#fff;margin:0.2rem 0;}
  .title ul li{width:20%;height:0.6rem; float:left;}
  .title ul li a{ display:block;width:1.46rem;height:0.6rem; text-align:center; font-size:0.3rem; color:#9e9a95;}
  .title ul li.active a{color:red;}
</style>

