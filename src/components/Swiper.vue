<template>
  <div class="banner" >
    <div class="swiper-container">
      <div class="swiper-wrapper">
      <div  class="swiper-slide" v-for="(item) of Slist" :key="item._id">
        
        <router-link :to="{name:'detail',params:{aid:item._id},query:{dataName:'banner'}}">
          <img :src="item.src"/>
          <div class="text-box">
            <h2>{{item.title}}</h2>
            <p>{{item.auth}}</p>
          </div>
        </router-link>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper' 
  import 'swiper/dist/css/swiper.css';
  
    export default {
      name: "Swiperdetails",
      props:['Slist'],
      updated(){
     
          new Swiper('.swiper-container', {
              loop: true, // 循环模式选项
              speed: 400,
              autoplay: {
                delay:1500
              },
              observer: true,//修改swiper自己或子元素时，自动初始化swiper
              observeParents: true,//修改swiper的父元素时，自动初始化swiper
            }); 

      },
    }
</script>

<style scoped>
  .banner{
    width:6.4rem;
    height: 3.5rem;
  }
  .swiper-slide img{
    width: 6.4rem;
    height: 3.5rem;
  }
  .text-box {
  width: 5.8rem;
  padding: 0 0.3rem;
  height: 1.24rem;
  position: absolute;
  left: 0;
  bottom: 0;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
}
.text-box h2 {
  font-size: 0.3rem;
  font-weight: normal;
  margin-top: 0.22rem;
  line-height: 100%;
  margin-bottom: 0.22rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.text-box p {
  line-height: 100%;
}

</style>

