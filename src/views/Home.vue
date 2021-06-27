<template>
<div id="home" >
  <nav-bar></nav-bar>
 <swiper :images-box="imagesBox" :height="height"></swiper>
  <home-main></home-main>
</div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/home/NavBar.vue'
import Swiper from '@/components/home/Swiper.vue'
import HomeMain from '@/components/home/HomeMain.vue'

export default {
  name: 'Home',
  data() {
    return {
      height:"250px",
      imagesBox: [
        { id: 1, imgurl: require("@/assets/img/bannerb.jpg") }
      ],
    }
  },
  components: {
   NavBar,
   Swiper,
   HomeMain
  },   
  
}

 </script>
