<template>
<div class="answer">
<el-container class="main">
  <el-aside width="150px">
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="vertical">
  <el-menu-item index="1">全部</el-menu-item>
  <el-menu-item index="2">关注</el-menu-item>
   <el-menu-item index="3">等你来答</el-menu-item>
    <el-menu-item index="4">有问必答</el-menu-item>
     <el-menu-item index="5">用户榜</el-menu-item>
      <el-menu-item index="6">标签榜</el-menu-item>
       <el-menu-item index="7">冲榜分奖金</el-menu-item>
</el-menu>
  </el-aside>
  <el-container>
    <el-main><el-tabs value="first">
    <el-tab-pane label="最新" name="first">
  <div v-for="o in 16" :key="o" class="text item">
    <ul class="left">
        <ol><div>1</div>
        <p>回答</p></ol>
        <ol><div>10</div>
        <p>浏览</p></ol>
        </ul>
    <div class="r"><h3>软件工程应该怎么学？</h3></div>
  </div>

    </el-tab-pane>
    <el-tab-pane label="最热" name="second">
         <div v-for="o in 4" :key="o" class="text item">
    <ul class="left">
        <ol><div>1</div>
        <p>回答</p></ol>
        <ol><div>10</div>
        <p>浏览</p></ol>
        </ul>
    <div class="r"><h3>1</h3></div>
  </div>
    </el-tab-pane>
    <el-tab-pane label="悬赏" name="third">
         <div v-for="o in 4" :key="o" class="text item">
    <ul class="left">
        <ol><div>1</div>
        <p>回答</p></ol>
        <ol><div>10</div>
        <p>浏览</p></ol>
        </ul>
    <div class="r"><h3>2</h3></div>
  </div>
    </el-tab-pane>
    <el-tab-pane label="待回答" name="fourth">
         <div v-for="o in 4" :key="o" class="text item">
    <ul class="left">
        <ol><div>1</div>
        <p>回答</p></ol>
        <ol><div>10</div>
        <p>浏览</p></ol>
        </ul>
    <div class="r"><h3>3</h3></div>
  </div>
    </el-tab-pane>
  </el-tabs></el-main>
  </el-container>
  <el-aside width="350px">
      <div class="user">
          <div class="question">
            <i class="el-icon-chat-line-square"></i>
              <span>  我的问答</span>
              <el-button type="primary" size="medium" icon="el-icon-edit">提问题</el-button>
          </div>
      </div>
      <div class="user-data">
         <ul>
         <li><span>收益(元)</span>0</li>
         <li><span>被采纳</span>0</li>
         <li><span>提问</span>1</li>
         <li><span>被点赞</span>0</li>
         <li><span>回答</span>1</li>
         <li><span>被评论</span>0</li>
         </ul>
      </div>
      <div class="help">
          <a href="">◇ 欢迎建议意见</a>
          <a href="">◇ 回答问题能得到什么？</a>
          <p><a href="">◇ 如何写出高质量提问和回答？</a></p>
      </div>
      <div class="rate">
          <p>您对 ‘问答社区’的满意程度？</p>
          <el-rate
          show-text>
         </el-rate>
      </div>
  </el-aside>
</el-container>
<footer-item></footer-item> 
</div>
</template>
<script>
import FooterItem from '@/components/home/FooterItem.vue'
export default {
   name:'AnswerMain',
     components:{
      FooterItem
    },
    data() {
      return {
        activeIndex: '1',
      }
    }
}
</script>
<style scoped>
.main{
    background-color: #F5F7F8;
    padding: 10px 60px;

}
  .el-aside {
    background-color: #fff;
    color: #333;
    margin: 10px;
  }
  
  .el-main {    
    background-color: #fff;
    color: #333;
    text-align: center;
     margin: 10px;
}
.el-tab-pane{
    height: 700px;
    overflow: auto;
}
.el-menu-item.is-active{
background-color: #ecf5ff
}
.text{
    padding: 30px 20px;
    border-bottom:1px solid #eee ;
}
ul ol{
    display: inline-block;
    text-align: center;
    padding: 0 20px;
    font-size: 14px;
    color: #555;
}
ul ol div{
    margin: -10px 0 0 0 ;
}
.question{
    font-size:24px;
    padding:25px;
    border-bottom:1px solid #eee;
}
.question span{
    font-size: 18px;
    padding: 0 10px;
}
.question .el-button{
    float: right;
}
.user-data {
     border-bottom:1px solid #eee;
}
.user-data li{
    margin: 16px 28px;
    width: 80%;
    height: 22px;
    font-size: 14px;
    font-weight: 400;
    color: #222226;
    line-height: 22px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.help{
    padding: 20px 20px;
    border-bottom:1px solid #eee;
}

.help p{
    margin-top: 10px;
}
.rate{
    padding: 20px;
    font-size: 20px;
    text-align: center;
}
.el-rate{
    margin-top:20px ;
}
</style>
