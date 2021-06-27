<template>
  <div class="nav-header">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      router
      text-color="#333333"
      active-text-color="#F35102"
      @select="handleSelect">
      <el-col :span="6"><div class="grid-content-left">
          <a href=""><img src="@/assets/img/logo.svg" alt="" /><span>SeeJoy数码社区</span></a>
        </div></el-col>

      <el-menu-item index="/">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">社区分类</template>
       <el-submenu index="2-1">
      <template slot="title">手机</template>
      <el-menu-item index="2-1-1">苹果</el-menu-item>
      <el-menu-item index="2-1-2">华为</el-menu-item>
      <el-menu-item index="2-1-3">小米</el-menu-item>
    </el-submenu>
        <el-submenu index="2-2">
      <template slot="title">电脑</template>
      <el-menu-item index="2-2-1">Windows</el-menu-item>
      <el-menu-item index="2-2-2">Macos</el-menu-item>
      <el-menu-item index="2-2-3">Linux</el-menu-item>
    </el-submenu>
        <el-submenu index="2-3">
      <template slot="title">单反</template>
      <el-menu-item index="2-3-1">选项1</el-menu-item>
      <el-menu-item index="2-3-2">选项2</el-menu-item>
      <el-menu-item index="2-3-3">选项3</el-menu-item>
    </el-submenu>
        <el-submenu index="2-4">
      <template slot="title">其他</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
      </el-submenu>
     
      <el-menu-item  index="answer">问答专区</el-menu-item>
       <el-menu-item index="resourse">资源中心</el-menu-item>
      <el-menu-item index="shop">精品商城</el-menu-item>
      <el-submenu index="6">
           <template slot="title">下载</template>
      <el-menu-item>客户端下载</el-menu-item>
      <el-menu-item>移动端下载</el-menu-item>
      <el-menu-item>小程序</el-menu-item>
      </el-submenu>
      <search></search>

      <el-col :span="5"><div class="grid-content-right">
          <el-button @click="tologin" class="login btn" size="medium" round>登录</el-button><el-button @click="toregister" class="register btn" size="medium" round>免费注册</el-button>
        </div></el-col>
    </el-menu>
  </div>
</template>

<script>
import Search from '@/components/home/Search.vue'
export default {
  name: "NavBar",
  components:{
     Search
  },
  props:{
     activeIndex:{
       type:String,
       default(){
         return "/"
       }
 
     }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    tologin(){
      this.$router.push('/login')
    },
    toregister(){
      this.$router.push('/register')
    }
  },
};
</script>

<style scoped>
.grid-content-left {
  border-radius: 4px;
  min-height: 56px;
  float: left;
}
.grid-content-left img {
  vertical-align: middle;
  padding: 6px 40px;
}
.grid-content-left span {
  position: relative;
  font-family: "Arial";
  font-size: 24px;
  color: #000;
  font-weight: 700;
  top: 5px;
}
.grid-content-right {
  border-radius: 4px;
  min-height: 56px;
  float: left;
  padding: 0px 30px;
}
.btn {
  margin-top: 12px;
  margin-left: 30px !important;
}
.login:hover {
  color: #f35102;
  border-color: #f35102;
  background-color: #fff;
}

.register:hover {
  color: #e9e9e9;
}
.login:focus {
  color: #f35102;
  border-color: #f35102;
  background-color: #fff;
}

.register:focus {
  color: #e9e9e9;
}
.register {
  color: #fff;
  background: linear-gradient(
      230.47deg,
      #ffbf1c -0.87%,
      #ff3a3a 25.89%,
      #ff123d 77.87%,
      #ff27c3 97.94%
    ),
    #f35102;
}
</style>
