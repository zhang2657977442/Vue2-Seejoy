<template>
  <el-container>
    <user-aside></user-aside>
    <el-main
      ><p>登录SeeJoy账号</p>
      <div class="from"><el-input placeholder="手机号码/电子邮箱" v-model="input"  clearable> </el-input>
      <el-input placeholder="请输入密码"  v-model="password"  show-password></el-input>
        <el-button type="primary"  round>登录</el-button>
        <span>没有账号？<a href="/register">注册</a></span><br/>
        <span class="divider">其他登录方式</span>
         <div class="way">
          <a href=""><img src="../../assets/img/wechat.svg" alt=""></a>
           <a href=""><img src="../../assets/img/qq.svg" alt=""></a>
            <a href=""><img src="../../assets/img/github.svg" alt=""></a>
        </div>
      </div>
   
    </el-main>
  </el-container>
</template>
<script>
import UserAside from "@/components/account/UserAside.vue";
export default {
  name: "UserLogin",
    data() {
      return {
        input: '',
        password:''
      }
    },
  components: {
    UserAside,
  },
  
};
</script>
<style scoped>
.el-main {
  font-size: 24px;
  color: #000;
  font-weight: 700;
  line-height: 60px;
  text-align: center;
   margin: 70px auto;
}
 .from{
   margin: 50px auto;
   width: 300px;
}
button{
   width:100%;
}
.el-main span{
font-size: 13px;
font-weight: normal;
}
.divider::after {
    display: inline-block;
    content: "";
    width: 100px;
    height: 1px;
    margin: 5px;
    background-color: rgb(219, 219, 219);
}
.divider::before {
    display: inline-block;
    content: "";
    width: 100px;
    height: 1px;
      margin: 5px;
    background-color: rgb(219, 219, 219);
}
.way a{
  padding: 10px
}
</style>
