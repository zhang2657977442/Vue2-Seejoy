<template>
<div class="resourse">
<el-container style="height: 700px; border: 1px solid #eee">
  <el-aside width="16.3%" >
    <el-menu :default-openeds="[]"
         background-color="#545c64"
     text-color="#fff"
       active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-s-platform"></i>系统专区</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>驱动专区</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>其他工具</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>

 <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
       <el-table-column
      label="文件名"
      prop="name">
    </el-table-column>
      <el-table-column
      label="文件大小"
      prop="edition">
    </el-table-column>
    <el-table-column
      label="日期"
      prop="date">
    </el-table-column>
    <el-table-column
      align="left">
      <template slot="header" slot-scope="scope">
        <el-input
          prefix-icon="el-icon-search"
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
        size="medium"
          icon="el-icon-download"
          type="success"
          @click="onload">下载</el-button>
     
      </template>
    </el-table-column>
  </el-table>
     
  </el-container>
   <footer-item></footer-item> 
    </div>
</template>
<script>
import FooterItem from '@/components/home/FooterItem.vue'
export default {
    name:"ResourseMain",
    components:{
      FooterItem
    },
    data() {
          const item = {
        date: '2016-05-02',
        name: 'Windows10_x64.iso',
        edition: '5.35GB'
      };
      return {
        tableData: Array(20).fill(item),
        search: ''
      }
    },
    methods: {
       onload() {
        this.$confirm('此操作将下载该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '下载成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消下载'
          });          
        });
      }
  }
}
</script>
<style scoped>
.el-aside{
    background-color: #545c64;
}
.el-table{
   margin: 30px 60px;
   overflow: auto;
}
.el-table::before {
    height: 0px;
}
.el-menu{
    border: 0;
}
</style>
