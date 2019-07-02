<template>
  <div class='start'>
     <!--头部logo显示-->
        <div class="logoImg"><img src="../assets/logo.png" alt="">
        <h3>欢迎来到我的vue项目</h3>
        </div>
       

        <!--底部按钮组-->
      <div class="login">
        <router-link to="/login">登录</router-link>
        
        <router-link to="/reg">注册</router-link>
      </div>  
  </div>
</template>
<script> 
    export default {
     
      components: {},
    }
</script>
<style scoped>
  .logoImg{width:5.0rem;height: 3.0rem;margin: 1.0rem auto;text-align: center;padding-bottom: 2.5rem;};
  .logoImg img{width: 5.0rem;height: 3.0rem;};

  h3{text-align: center;font-size:24px;width:100%;margin-bottom: 2rem;};

  .login{width:7.0rem;height:0.6rem; margin:0 auto;}
  .login a{width:2.97rem;height:0.6rem; font-size:0.35rem; line-height:0.6rem; float:left; color:#fff; text-align:center;background: darkblue;margin: 0.1rem;border-radius: 0.5rem;}
 
</style>



