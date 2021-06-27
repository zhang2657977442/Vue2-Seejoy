<template>
  <div class="selectbar">
    <el-row class="row1">
      <el-button size="medium" type="primary" round>热门</el-button>
      <el-button size="medium" round>关注</el-button>
      <span></span>
      <el-button size="medium" round>手机</el-button>
      <el-button size="medium" round>电脑</el-button>
      <el-button size="medium" round>平板</el-button>
      <el-button size="medium" round>耳机</el-button>
      <el-button size="medium" round>相机</el-button>
      <el-button size="medium" round>智能穿戴</el-button>
      <el-button size="medium" round>游戏外设</el-button>
      <el-button size="medium" round>其他</el-button>
      <el-button class="publish" type="primary"
        >分享经验<i class="el-icon-upload el-icon--right"></i
      ></el-button>
    </el-row>
    <el-divider></el-divider>
    <el-row class="row2">
      <div class="left">
        <el-link :underline="false">全部</el-link>
        <el-divider direction="vertical"></el-divider>
        <el-link :underline="false">测评</el-link>
        <el-divider direction="vertical"></el-divider>
        <el-link :underline="false">问题</el-link>
      </div>
      <div class="right">
        <el-dropdown>
          <el-button size="small">
            全部设备<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>手机</el-dropdown-item>
            <el-dropdown-item>电脑</el-dropdown-item>
            <el-dropdown-item>平板</el-dropdown-item>
            <el-dropdown-item>PC</el-dropdown-item>
            <el-dropdown-item>耳机</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown>
          <el-button size="small">
            推荐<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>推荐</el-dropdown-item>
            <el-dropdown-item>热门</el-dropdown-item>
            <el-dropdown-item>最新</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "SelectBar",
};
</script>
<style scoped>
.row1 {
  position: relative;
  padding: 25px 50px;
  width: 100%;
}
.row2 {
  position: relative;
  padding: 10px 50px 0px 50px;
  width: 100%;
}

.el-row span {
  position: relative;
  display: inline-block;
  top: 8px;
  margin: 0 10px;
  width: 1px;
  height: 26px;
  background-color: rgb(164, 173, 179);
}

.publish {
  position: absolute;
  top: 30px;
  right: 80px;
}

.right {
  float: right;
  margin-right: 325px;
}
.el-dropdown {
  padding: 0 10px;
}
.el-divider {
    margin: 10px;
}
</style>
