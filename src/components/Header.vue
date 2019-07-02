<template>
  <div class="header">
    <div class="nav">
      <ul>
        <!-- active-class="属性名"，指定激活后的样式 -->
        <router-link tag="li" to="/recommend" active-class="active"><a href="javascript:;" >推荐</a></router-link>
        <router-link tag="li" to="/special" active-class="active"><a href="javascript:;" >专题</a></router-link>
        <router-link tag="li" to="/rank" active-class="active"><a href="javascript:;" >榜单</a></router-link>
      </ul>
      <input type="search" name="" id="search">
    </div>
  </div>
</template>

<style scoped>
.header{height: 1rem;}
.nav{width:100%; position:fixed; top:0;left:0; z-index:2; background:#fff;}
.nav ul{width:4.38rem;height:1rem; float: left;margin-top: 0;}
.nav ul li{width:1.46rem;height:1rem; float:left;}
.nav ul li a{ display:inline-block;width:1.46rem;height:0.9rem; line-height:1rem; text-align:center; font-size:0.3rem; color:#9e9a95;}
.nav ul li.active a{height:0.9rem; border-bottom:0.1rem solid #1296db; color:#1296db;}
#search{background: url(../assets/img/serch.png) no-repeat center;float: right;background-size:100%;height: 0.4rem;width: 0.4rem;margin:0.3rem 0.2rem 0 0;}
</style>

