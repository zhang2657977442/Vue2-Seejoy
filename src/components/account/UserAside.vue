<template>
  <el-aside width="33%"><a href="/"><img src="../../assets/img/logo.svg" alt="" /><span>SeeJoy</span></a>
    <p>
      SeeJoy数码3C社区，让高校学生方便快捷体验到最新的数码3C设备，了解到最全面的数码信息，积极推动品牌文化，形成新型文化效应，共同建设信息社区。
    </p></el-aside>
</template>
<script>
export default {
  name: "UserAside",
   
};
</script>
<style scoped>
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 720px;
  max-width: 636px;
  background-image: url(https://modao.cc/images/auth/auth_banner.png);
  position: relative;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.el-aside img {
  position: absolute;
  width: 64px;
  height: 64px;
  left: 0;
  right: 200px;
  margin: 0 auto;
  top: 30px;
}
.el-aside span {
  position: absolute;
  font-size: 35px;
  color: #fff;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 50px;
}
.el-aside p {
  position: absolute;
  bottom: 80px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width:90%;
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  line-height: 1.5;
}

</style>
