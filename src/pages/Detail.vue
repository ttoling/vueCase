<template>
  <div class='detail'>
    <div class="nav">
      <ul>
        <!-- 添加点击事件，返回上一个页面 -->
        <li class="l-btn" @click="goback"></li>       
      </ul>
    </div>
    <!-- 如果detail.tetail读取到了就渲染content，如果没有读取到就不渲染 -->
    <div class="content" v-if="detail.detail">
      <div class="cont">
        <h3>{{detail.title}}</h3>
        <div class="time">
          <p>
            <img :src="baseUrl + detail.detail.auth_icon" alt=""/>
            <span>{{detail.auth}}</span>
            <b>+关注</b>
          </p>
        </div>
        <div class="text-box" v-html="detail.detail.content"></div>
      </div>
    </div>
    <div class="foot-btn">
      <ul>
        <router-link class="say" tag="li" to=""  active-class="say-active"><a href="javascript:;" >评论</a></router-link>
        <router-link class="zan" tag="li" to="" active-class="zan-active"><a href="javascript:;" >赞</a></router-link>
        <router-link class="cai" tag="li" to=""  active-class="cai-active"><a href="javascript:;" >踩</a></router-link>
        <router-link class="fx" tag="li" to="" active-class="fx-active"><a href="javascript:;" >分享</a></router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name:'Detail',
  props:['aid','dataName'],
  methods:{
    goback(){
      this.$router.go(-1)//编程式跳转
    }
  },
  computed:mapGetters([
    'detail'
  ]),
  mounted(){
    // console.log("detail",this.aid,this.dataName)
    let id = this.aid
    let dataName = this.dataName
    this.$store.dispatch('UPDATE_DETAIL',{id,dataName})
  }
 
}
</script>
<style scoped>
  html,body{ overflow-x: hidden; }
  .nav{width:100%; position:fixed;top:0;left:0; background:#fff; border-bottom:1px solid #e8eaec; z-index:99;}
  .nav ul{width:6.4rem;height:0.45rem; padding-top:0.15rem; margin:0 auto;}
  .nav ul li{width:0.29rem;height:0.31rem; background:url(../assets/img/history.png) no-repeat 0 0; background-size:100%; margin:0 0 0 0.38rem;}

  .content{margin:0 auto; margin-top:0.6rem; padding-bottom:0.85rem;}

  .content .cont{ padding:0 0.38rem; color:#494d4d;}
  .cont h3{ font-size:0.4rem; line-height:1rem; padding-bottom:0.25rem;}
  .cont .time{height:1rem; line-height:0.24rem; margin:0.26rem 0; }
  .time p{height: 1rem;}
  .time p span{float: left;line-height: 1rem;margin-left: 0.2rem;}
  .time p img{width:1rem;height:1rem;float: left;}
  .time p b{float: right;margin-right: 0.3rem;display: inline-block;width: 1.5rem;height: 0.6rem;background:#1296db;color:#fff;line-height: 0.6rem;text-align: center;font-size: 0.3rem;margin-top:0.2rem;}

  .cont .text-box{}

  .foot-btn{width:100%;height:0.8rem; background:#fff; position:fixed; left:0; bottom:0; border-top:1px solid #9e9a95;}
  .foot-btn ul{width: 100%; margin:0 auto;}
  .foot-btn ul li{ float:left;width: 0.5rem;}
  .foot-btn ul li a{ display:inline-block; width:100%;margin-top:0.45rem;text-align: center;}
  .foot-btn ul .say{width:0.5rem;height:0.50rem; background:url(../assets/img/home1.png) no-repeat center; background-size:100%; margin-top:0.1rem;margin-left:0.7rem;}
  .foot-btn ul .zan{width:0.5rem;height:0.50rem; background:url(../assets/img/like1.png) no-repeat center; background-size:100%; margin-left:1rem;margin-top:0.1rem;}
  .foot-btn ul .cai{width:0.5rem;height:0.50rem; background:url(../assets/img/cai.png) no-repeat center;background-size:100%; margin-left:1rem; margin-top:0.1rem;}
  .foot-btn ul .fx{width:0.5rem;height:0.50rem; background:url(../assets/img/share.png) no-repeat center;background-size:100%; margin-left:1rem; margin-top:0.1rem;}

  .foot-btn ul .say-active{background:url(../assets/img/home.png) no-repeat center;background-size:100%;}
  .foot-btn ul .say-active a{color:#1296db}
  .foot-btn ul .zan-active{background:url(../assets/img/like1.png) no-repeat center;background-size:100%;}
  .foot-btn ul .zan-active a{color:#1296db}
  .foot-btn ul .cai-active{background:url(../assets/img/cai.png) no-repeat center;background-size:100%;}
  .foot-btn ul .cai-active a{color:#1296db}
  </style>
