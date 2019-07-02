<template>
  <div class="newsList">
    <ul>
      <li v-for="(item,index) of list" :key="item._id">
        <router-link :to="{name:'detail',params:{aid:item._id},query:{dataName:dataName}}">
          <h2>{{index+1}}.{{item.title}}</h2>
          <p>{{item.des}}</p>
        </router-link>
        <div class="meta">
          <a href="javascript:;" class="nickname"><i><img src="../assets/img/user1.png" alt=""></i>{{item.auth}}</a>
          <a href="javascript:;" class="comments"><i><img src="../assets/img/comment.png" alt=""></i>0</a>
          <a href="javascript:;" class="like"><i><img src="../assets/img/like.png" alt=""></i>0</a>
        </div>
      </li>     
    </ul>
  </div>
</template>
<script>
export default {
  props:['list','dataName'],
  updated(){
  console.log("list",this.list)

  }
}
</script>

<style>
.content .newsList{width:6.4rem; margin:0 auto;background: #fff;}
.newsList{clear: both;margin-bottom:1rem;}
.newsList ul{ padding:0 0.4rem;}
.newsList ul li{ color:#494d4d; padding-top:0.2rem; padding-bottom:0.1rem;border-bottom:1px dashed #ccc;}
.newsList ul li h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
.newsList ul li p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
.newsList .meta{font-weight: 400;width: 100%;line-height: 0.3rem;font-size: 0.2rem;height: 0.3rem;}
.newsList .meta a{float: left;height: 0.3rem;margin-right: 0.2rem;}
.newsList .meta a i{width: 0.3rem;height: 0.3rem;margin:0 0.1rem;}
.newsList .meta a i img{width: 0.3rem;height: 0.3rem;vertical-align: middle;}

</style>

