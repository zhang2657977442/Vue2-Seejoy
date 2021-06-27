<template>
  <div class="asideitem">
    <div class="hot">
      <img class="icon" src="../../assets/img/hot.png" alt="" />
      <span>热门话题</span>
      <ul class="topic">
        <li>
          <a href=""><img
              src="../../assets/img/topic1.jpg"
              alt="" />
            <div class="info">
              <h3>HarmonyOS手机系统来了</h3>
              <p>你会购买搭载HarmonyOS系统的手机吗？</p>
                </div>
                </a>
        </li>
        <li>
          <a href=""><img
              src="../../assets/img/topic2.jpg"
              alt="" />
            <div class="info">
                <h3>WWDC2021开发者大会</h3>
                <p>6 月 8 日凌晨 1 点，在线直播等你来看</p>
                </div></a>
        </li>
      </ul>
    </div>
    <div class="tit">
      <img class="icon" src="../../assets/img/tit.png" alt="" />
      <span>精选头条</span>
      <ul class="hot-tit">
          <li><a href=""><img src="../../assets/img/hot1.jpg" alt=""><div class="info"><p>鸿蒙最新IDE绝密档案大揭秘，绝对有你不知道的东西！</p></div></a></li>
          <li><a href=""><img src="../../assets/img/hot2.jpg" alt=""><div class="info"><p>混沌初开：全新HarmonyOS 2正式到来！</p></div></a></li>
          <li><a href=""><img src="../../assets/img/hot3.jpg" alt=""><div class="info"><p>腾讯第一大股东 Prosus 18亿美元收购 StackOverFlow</p></div></a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "AsideItem",
};
</script>
<style scoped>
.asideitem span {
  color: #20232c;
  font-size: 18px;
  margin-left: 5px;
  font-weight: bolder;
  vertical-align: middle;
}
.asideitem .icon {
  width: 32px;
  height: 32px;
  vertical-align: middle;
}
.topic li {
  position: relative;
  width: 287px;
  height: 123px;
  overflow: hidden;
  padding:  15px 10px;
}
.topic img {
    width: 100%;
    max-height: 173px;
    border-radius: 4px;
}
.topic .info{
    position: absolute;
    color: #fff;
    left: 16px;
    right: 16px;
    top: 14px;
    bottom: 10px;
}
.info p,h3{
    padding: 10px;
}
.hot-tit img{
    width: 100px;
    height: 100px;
    border-radius: 4px;
}

.hot-tit li {
    padding: 15px 5px
}
.hot-tit .info {
    width: 230px;
    height: 80px;
    display: inline-block;
    overflow: hidden;
    padding: 10px 0px;
}
.hot,.tit{
    margin: 20px 0;
}

.hot-tit .info p {
    color: #000;
}
p:hover{
    text-decoration: underline;
}
</style>
