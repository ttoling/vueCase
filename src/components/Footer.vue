<template>
  <div class="foot-btn">
    <ul>
      <router-link class="home" tag="li" to="/home" active-class="home-active"><a href="javascript:;" >首页</a></router-link>
      <router-link class="follow" tag="li" to="/follow" active-class="follow-active"><a href="javascript:;" >关注</a></router-link>
      <router-link class="my" tag="li" to="/user" active-class="my-active"><a href="javascript:;" >我的</a></router-link>
    </ul>
  </div>
</template>
<script>
export default {
  
  
}
</script>

<style scoped>
.foot-btn{width:100%;height:0.8rem; background:#fff; position:fixed; left:0; bottom:0; border-top:1px solid #9e9a95;}
.foot-btn ul{width:4.08rem; margin:0 auto;}
.foot-btn ul li{ float:left;}
.foot-btn ul li a{ display:inline-block; width:100%;margin-top:0.45rem;text-align: center;}
.foot-btn ul .home{width:0.50rem;height:0.50rem; background:url(../assets/img/home1.png) no-repeat center; background-size:100%; margin-top:0.1rem;}
.foot-btn ul .follow{width:0.50rem;height:0.50rem; background:url(../assets/img/follow1.png) no-repeat center; background-size:100%; margin-left:1.18rem;margin-top:0.1rem;}
.foot-btn ul .my{width:0.50rem;height:0.50rem; background:url(../assets/img/user1.png) no-repeat center;background-size:100%; margin-left:1.18rem; margin-top:0.1rem;}
.foot-btn ul .home-active{background:url(../assets/img/home.png) no-repeat center;background-size:100%;}
.foot-btn ul .home-active a{color:#1296db}
.foot-btn ul .follow-active{background:url(../assets/img/follow.png) no-repeat center;background-size:100%;}
.foot-btn ul .follow-active a{color:#1296db}
.foot-btn ul .my-active{background:url(../assets/img/user.png) no-repeat center;background-size:100%;}
.foot-btn ul .my-active a{color:#1296db}
</style>
