<template>
  <div class="banner">
      <div class="swiper-container">
        <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide
          v-for="(item) of Slist"
          :key="item._id">
          <img :src="item.src" alt="">
          <div class="text-box">
            <h2>{{item.title}}</h2>
            <p>{{item.auth}}</p>
          </div>
        </swiper-slide>
            <!-- <div class="swiper-slide"><img src="../assets/images/banner2.png" alt=""></div>
            <div class="swiper-slide"><img src="../assets/images/banner1.png" alt=""></div> -->
        </swiper>
    
    </div>
</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'


export default {
  props:['Slist'],
  data(){
    return {
      swiperOption: {
        initialSlide :0,
        loop: true,//循环模式
        speed: 400,
        autoplay: {//自动播放
          delay: 2000,
          stopOnLastSlide:false,
          disableOnInteraction: true,//触碰自动切换停止
        },
        autoplayDisableOnInteraction: false,

        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true//修改swiper的父元素时，自动初始化swiper
      }
    }
  }
}
</script>

<style scoped>
/* .content{max-width:6.4rem; margin:0 auto; margin-bottom:0.8rem;} */
@import url(../assets/css/swiper.min.css);
/* .banner {
  position: relative;
  overflow: hidden;
  z-index: 1;
  height: 3.5rem;
}  */
/* .banner ul li {
  width: 6.4rem;
  height: 3.5rem;
  float: left;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
}
.banner ul li img {
  width: 100%;
  height: 100%;
  display: block;
}  */ 
.swiper-container {
    width: 6.4rem;
    height: 3.5rem;
}
.swiper-container img {
   width: 6.4rem;
  height: 3.5rem;
}
.text-box {
  width: 5.8rem;
  padding: 0 0.3rem;
  height: 1.0rem;
  position: absolute;
  left: 0;
  bottom: 0;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
}
.text-box h2 {
  font-size: 0.3rem;
  font-weight: normal;
  margin-top: 0.20rem;
  line-height: 100%;
  margin-bottom: 0.20rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.text-box p {
  line-height: 100%;
} 

/* .banner ol {
  position: absolute;
  right: 0.2rem;
  bottom: 0.2rem;
}
.banner ol li {
  width: 0.15rem;
  height: 0.15rem;
  background: #5477b2;
  float: left;
  border-radius: 50%;
  margin-right: 0.08rem;
}
.banner ol li.active {
  background: #fff;
} */
</style>
 