<template>
  <el-row >
    <el-col :span="5" v-for="(o, index) in count" :key="o">
      <el-card :body-style="{ padding: '0px' }">
        <img src="../../assets/img/item.jpeg" class="image" />
        <div class="content" style="padding: 14px">
          <a href="">WWDC21 6月8日凌晨1点</a>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "MainItem",
  data() {
    return {
      count: 12,
      currentDate: new Date().toDateString(),
    };
  },
};
</script>
<style scoped>
.el-row {
  height: 865px;
  overflow:auto;
}
.el-col {
  margin: 0% 2% 4% 2%;
}
.content {
  line-height: 30px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
