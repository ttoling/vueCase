<template>
  <div class="content">
    <div class="title">
       <i class="l-btn" @click="goback"></i>
        <h3>我的

          <span class="r-btn" @click="logout">注销</span>
        </h3>
    </div>
    <div class="header">
      <h2><img :src="baseUrl+data.icon"/></h2> 
      <div class="user">
        <h3>{{data.nikename}}</h3>
        <p><span>关注</span><b>{{data.follow}}</b><span>粉丝</span><b>{{data.fans}}</b></p>
      </div>
    </div>
    <div class="main">
      <ul>
        <li>
          <img src="../assets/img/wenzhang.png" alt="">
          我的文章
        </li>
         <li>
          <img src="../assets/img/shujia.png" alt="">
          我的书架
        </li>
         <li>
          <img src="../assets/img/dianzan.png" alt="">
          赞和收藏
        </li>
         <li>
          <img src="../assets/img/jiangli.png" alt="">
          有奖任务
        </li>
      </ul>
    </div>
    <div class="docList">
      <ul>
        <li class="gk-text">
          <p>简书会员</p>
          <b></b>
        </li>
        <li class="mm-text">
          <p>简书活动</p>
          <b></b>
        </li>
        <li class="cg-text">
          <p>简东西</p>
          <b></b>
        </li>
        <li class="sc-text">
          <p>我的钱包</p>
          <b></b>
        </li>
         <li class="sc-doc">
          <p>我的专题/文稿</p>
          <b></b>
        </li>
         <li class="sc-history">
          <p>浏览历史</p>
          <b></b>
        </li>
         <li class="sc-set">
          <p>设置</p>
          <b></b>
        </li>
         <li class="sc-help">
          <p>帮助反馈</p>
          <b></b>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      data:{}
    }
  },
  methods:{
    goback(){
      this.$router.go(-1)//编程式跳转
    },
     logout(){
      axios({
        url:'/api/logout',
        method:'put'
      }).then(
        res=>{
          if(res.data.err===0){
            console.log('注销成功')
            this.$router.push('/login')
          }
        }
      )
    },
  },
  beforeRouteEnter(to,from,next){
    console.log('user beforeRouteEnter')  
    axios({
      url:'/api/user'
    }).then(
      res=>{
        if(res.data.err===1){
          console.log(res.data)
          next('/login')
        }else{
          console.log(res.data)
          next((_this)=>{
            _this.data=res.data.data
          })
        }
      }
    )
  },
   
}
</script>

<style scoped>
body{ background:#e6e7e7;}
.content{max-width:6.4rem; margin:0 auto; margin-bottom:0.8rem;}
.title{width:100%; z-index:2;margin: 0.1rem 0;}
.title .l-btn{background:url(../assets/img/history.png) no-repeat 0 0; background-size:100%;float: left;width:0.29rem;height:0.31rem;margin:0.3rem 0 0 0.38rem;}
.title h3{height: 1rem;text-align: center;line-height: 1rem;width: 100%;font-size: 0.3rem;font-weight: 400;background:#fff;}
.title h3 .r-btn{float:right;line-height: 1rem;margin-right: 0.2rem;font-size: 0.2rem;color:darkgray;}
.content .header{width:6.4rem;height:2.3rem;border-top:0.02rem solid #e6e7e7;}
.header h2{width:2rem;height:2rem; border-radius:50%;margin-top: 0.2rem;float: left;}
.header h2 img{width:100%;}
.header .user{width: 4rem;float: left;margin-top: 0.2rem;margin-left: 0.4rem;}
.header .user h3{margin-top:0.3rem;height: 1rem;line-height: 1rem;}
.header .user span{margin-right:0.2rem;}
.header .user b{margin-right: 0.1rem;}

.main{width: 100%;height: 1rem;border-top:0.02rem solid #e6e7e7;border-bottom:0.02rem solid #e6e7e7; }
.main ul{width: 100%;background: #fff;height: 1rem;margin: 0.3rem 0;}
.main ul li{float: left;height: 0.5rem;width: 25%;text-align: center;}
.main ul li img{width: 0.5rem;height: 0.5rem;display: block;margin-left:0.55rem;}

.content .docList{width:6.4rem; margin:0 auto; margin-top:0.32rem;}
.docList ul{ border-top:0.02px solid #7b7c7c;}
.docList ul li{ background:#fff;height:0.79rem; border-bottom:0.02rem solid #e6e7e7;}
.docList ul li b{width:0.21rem;height:0.24rem; background:url(../assets/img/next_img.png) no-repeat 0 0; background-size:100%; float:right;margin-right:0.34rem; margin-top:0.28rem;}
.docList ul li p{float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}


/* .gk-text p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
.mm-text p{ float:left; font-size:0.25rem;margin-left:0.35rem; margin-top:0.25rem;}
.cg-text p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
.sc-text p{ } */




</style>

