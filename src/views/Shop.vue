<template>
  <div class="shop">
    <nav-bar :active-index="shop"></nav-bar>
    <swiper :images-box="imagesBox" :height="height"></swiper>
    <shop-main></shop-main>
    <footer-item></footer-item>
  </div>
</template>
<script>
import NavBar from "@/components/home/NavBar.vue";
import Swiper from '@/components/home/Swiper.vue'
import FooterItem from '@/components/home/FooterItem.vue';
import ShopMain from '@/components/shop/ShopMain.vue'

export default {
  name: "Shop",
  data() {
    return {
      shop: "shop",
      height:"450px",
      imagesBox: [
        { id: 0, imgurl: require("@/assets/img/banner3.jpg") },
        { id: 1, imgurl: require("@/assets/img/banner1.jpg") },
        { id: 2, imgurl: require("@/assets/img/banner2.jpg") },
      ],
    };
  },
  components: {
    NavBar,
    Swiper,
    FooterItem,
    ShopMain
  },
};
</script>
<style scoped>
</style>
