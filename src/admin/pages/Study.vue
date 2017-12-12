<template>
  <el-container class="page">
    <!-- left aside  -->
    <el-aside width="200px" >
          <el-menu @open="handleOpen" :default-openeds="defaultOpeneds" unique-opened @select="selectItems">
            <el-submenu index="front">
              <template slot="title">
                <i class="el-icon-date"></i>
                <span>前端开发</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="javascript">JavaScript</el-menu-item>
                <el-menu-item index="html">HTML</el-menu-item>
                <el-menu-item index="css">CSS</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            
            <el-submenu index="admin">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>后台开发</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">PHP</el-menu-item>
                <el-menu-item index="2-2">JAVA</el-menu-item>
                <el-menu-item index="2-3">MYSQL</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="add-node">
              <i class="el-icon-edit-outline"></i>
              <span>新增笔记</span>
            </el-menu-item>
          </el-menu>
    </el-aside>
    <!-- main -->
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>

</template>

<script>
export default {
  name: 'study',
  data(){
    return{
      defaultOpeneds:["front"]
    }
  },
  methods:{
    handleOpen(key,keyPath){
      // console.log(key)
      // console.log(keyPath)
    },
    selectItems(index,indexPath){
      console.log(index)
      // console.log(indexPath)
      this.$router.push("/admin/study/"+index)
    }
  }
}
</script>

<style  scoped lang="stylus">
   
   
</style>
