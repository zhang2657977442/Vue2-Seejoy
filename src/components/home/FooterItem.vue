<template>
  <div class="footeritem">
    <div>
      <img src="../../assets/img/logo.svg" alt="" />
      <span>SeeJoy</span>
      <p>
        SeeJoy数码3C社区，让高校学生方便快捷体验到最新的数码3C设备，了解到最全面的数码信息，积极推动品牌文化，形成新型文化效应，共同建设信息社区。
      </p>
      <p>
        转载内容版权归作者及来源网站所有，本站原创内容转载请注明来源，商业媒体及纸媒请先联系：xxxxxxxxxxxxxxxxxxx
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterItem",
};
</script>
<style scoped>
.footeritem {
  width: 100%;
  height: 150px;
  text-align: center;
  background-color: #050d22;
}
.footeritem div {
  padding: 20px 0;
  font-size: 12px;
}
.footeritem img {
  vertical-align: middle;
}
.footeritem span {
  position: relative;
  font-size: 20px;
  color: #fff;
  top: 2px;
  left: 10px;
}

.footeritem p {
  padding: 5px 0;
}
</style>
