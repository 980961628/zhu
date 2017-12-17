<template>
  <el-container class="page">
    <!-- left aside  -->
    <el-aside width="200px" >
          <el-menu @open="handleOpen" :default-openeds="defaultOpeneds" unique-opened @select="selectItems">
            <el-submenu :index="item.name" v-for="(item,index) in category" :key="index">
              <template slot="title">
                <i class="el-icon-date"></i>
                <span>{{item.name}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item :index="option.name" v-for="(option,i) in item.child_data" :key="i">{{option.name}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            
            <el-submenu index="category" >
              <template slot="title">
                <i class="el-icon-date"></i>
                <span>分类管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="category-add">新增分类</el-menu-item>
                <el-menu-item index="category-list">分类列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-menu-item index="add-node">
              <i class="el-icon-edit-outline"></i>
              <span>新增笔记</span>
            </el-menu-item>
            <!-- <el-menu-item index="add-category">
              <i class="el-icon-edit-outline"></i>
              <span>新增分类</span>
            </el-menu-item> -->
          </el-menu>
    </el-aside>
    <!-- main -->
    <el-main>
      <router-view ref='view'></router-view>
    </el-main>
  </el-container>

</template>

<script>
export default {
  name: 'study',
  data(){
    return{
      defaultOpeneds:["front"],
      category:[]
    }
  },
  mounted:function(){
    this._getCateList();
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
    },
     _getCateList:function(){
      var that = this;
      // console.log()
      that.$http.post(that.$store.state.url+"admin/study/category/list",{type:1})
      .then(function(res){
        // console.log(res)
        if(res.data.code==0){
          that.category = res.data.data;
          // res.data.data.forEach(item => {
          //     that.category.push({
          //       label:item.name,
          //       value:item.id
          //     })
          // });
        }
        // console.log(that.category)
      })
      .catch(function(res){
        console.log(res)
      })
    }
  }
}
</script>

<style  scoped lang="stylus">
   
   
</style>
