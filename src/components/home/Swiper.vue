<template>
  <div class="swiper">
    <el-carousel  :height="height"  >
      <el-carousel-item v-for="item in imagesBox" :key="item.id">
        <img :src="item.imgurl" class="image" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
   name:'Swiper',
  props:{
    height:String,
    imagesBox:Array
  }
}
</script>
<style scoped>
.swiper{
  text-align: center;
}
.swiper img{
    position: relative;
    max-width: 1920px;
    right: 15%;
}
</style>
