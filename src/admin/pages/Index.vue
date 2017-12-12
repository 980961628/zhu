<template>
  <div id="admin">
    <!-- header -->
    <el-container>
      <el-header class="header">
        <el-menu mode="horizontal" default-active="study"   background-color="#545c64" text-color="#fff"
        active-text-color="#ffd04b" class="menu" @select="menuSelect">
          <el-menu-item index="study">学习园地</el-menu-item>
          <el-menu-item index="shop">我的作品</el-menu-item>
          <el-menu-item index="3">我的社区</el-menu-item>
          <el-menu-item index="4">网站设置</el-menu-item>
          <el-menu-item index="5">退出登录</el-menu-item>
        </el-menu>

      </el-header>

        <router-view>

        </router-view>
        
    </el-container>

  </div>
</template>

<script>
export default {
  name: 'admin',
  data(){
    return{
       show: true,
       radio: '1',
       activeIndex2: '1'
    }
  },
  methods:{
    menuSelect(key, keyPath) {
      // console.log(key, keyPath);
      this.$router.push("/admin/"+key)
    },
  }
}
</script>

<style  scoped lang="stylus">
  body
  background red
    // max-width 1200px
  .header
    .menu
      padding 0 80px
      background url("../../assets/images/zhu.png") no-repeat
      background-position 20px 15px
  .el-header
      padding 0 
   
</style>
