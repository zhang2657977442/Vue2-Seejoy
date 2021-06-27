<template>
<el-container>
  <el-header :class="{'fix':isfixed}"  height="170px"><select-bar></select-bar></el-header>
  <el-container :class="{'fixed':isfixed}" ref="container">
      <el-main><main-item></main-item></el-main>
      <el-aside   width="23%"><aside-item></aside-item></el-aside>
  </el-container>
    <footer-item></footer-item>
   
</el-container>
</template>
<script>
import SelectBar from '@/components/home/SelectBar.vue'
import MainItem from '@/components/home/MainItem.vue'
import AsideItem from '@/components/home/AsideItem.vue'
import FooterItem from '@/components/home/FooterItem.vue'
export default {
   name:'HomeMain',
   components:{
     SelectBar,
      MainItem,
      AsideItem,
      FooterItem
   },
   data() {
     return {
       isfixed:false
     }
   },
   mounted() {

    　　window.addEventListener('scroll', this.handleScrollx, true)
   },
   methods: {
        handleScrollx() {
          if(window.pageYOffset>315){
             this.isfixed=true;
          }
          else{
              this.isfixed=false;
          }
        }
    }
}
</script>
<style scoped>
.fixed {
  margin-top: 174px;
}
.fix{
  position: fixed;
  top: 0;

}

.el-container{
   overflow-x: hidden;
}
 .el-header{
   z-index: 9;
   background-color: #fff;
   width: 1496px;
 }

  .el-aside {
    color: #333;
  }
  
  .el-main {
    color: #333;
    text-align: center;
    line-height: 600px;
  }
</style>
