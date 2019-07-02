<template>
  <div class="special">
    <div class="img"><img src="../assets/images/1.jpg" alt=""></div>
    <div class="nav">
      <ul>
        <li>
          <img src="../assets/img/bei.png" alt="">
          市场
        </li>
         <li>
          <img src="../assets/img/query.png" alt="">
          广场
        </li>
         <li>
          <img src="../assets/img/hot.png" alt="">
          热门专题
        </li>
         <li>
          <img src="../assets/img/advice.png" alt="">
          投诉建议
        </li>
         <li>
          <img src="../assets/img/public.png" alt="">
          公益
        </li>
      </ul>
    </div>
    <div class="mySpecial"><img src="../assets/img/menu.png" alt=""><span>我关注的专题>>></span></div>
    <div class="content">
      <List :list="special" :dataName="'special'"></List>
    </div>
  </div>
</template>
<script>
import List from '../components/List'
import { mapGetters } from 'vuex';
export default {
  
  components:{List},
  mounted(){
    this.$store.dispatch('UPDATE_SPECIAL')
  },
  computed:mapGetters([
    'special'
  ])
}
</script>
<style scoped>
.img{width: 100%;height: 3.0rem;}
.img img{width: 100%;height: 3rem;}
.nav{width: 100%;}
.nav ul{width: 100%;background: #fff;height: 1rem;padding:0.1rem 0;}
.nav ul li{float: left;height: 0.5rem;width: 20%;text-align: center;}
.nav ul li img{width: 0.5rem;height: 0.5rem;display: block;margin-left:0.37rem;}
.mySpecial{height: 0.5rem;width: 200%;margin: 0.2rem 0;background: #fff;padding:0.1rem 0;}
.mySpecial img{width: 0.5rem;height: 0.5rem;float: left;margin: 0 0.1rem;}
.mySpecial span{line-height: 0.5rem;float: left;margin-left: 0.3rem;}
.content{background: #fff;}
</style>

