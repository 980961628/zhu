<template>
  <div class="add">

    <el-breadcrumb separator="/" class="nav">
      <el-breadcrumb-item>学习园地</el-breadcrumb-item>
      <el-breadcrumb-item>分类列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-container>
      <el-table 
        :data="categoryList"  
        border
      >
        <el-table-column
          prop="name"
          label="名称"
          width="200"
        ></el-table-column>

         <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
      </el-table>
    </el-container>

    <el-dialog 
      title="修改分类名称" 
      :visible.sync="dialogFormVisible"
      :before-close="dialogClose"  
    >
      <el-form :model="form">
        <el-form-item label="分类名称" label-width="300">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editPost">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import { mapState } from 'vuex'

export default {
  name: 'add',
  data(){
    return{
      categoryList:[],
      dialogFormVisible:false,
      form: {
          name: '',
          id:''
      }
    }
  },
  created(){
    // console.log(this.$store.state.count)
  },
  computed:mapState({
    num:state=>state.count,
    name:state=>state.username,
    url:state=>state.url
  }),
  methods:{
    dialogClose(done){
      // console.log(done)
      this.dialogFormVisible =false;
    },
    editPost(){
      var that = this;
      
      that.dialogFormVisible =false;
      that.$http.post(that.url + 'admin/study/category/update',that.form)
      .then(res=>{
        console.log(res)
        if(res.data.code == 0){
          that.$message({
            message:res.data.msg,
            type:"success"
          })
          for(var i=0;i<that.categoryList.length;i++){
            if(that.categoryList[i].id == that.form.id){
              that.categoryList[i].name = that.form.name
              return;
            }
          }
        }else{
          that.$message.error(res.data.msg)
        }
      })
    },
    handleEdit(index, row) {
      console.log(index, row);
      var that = this;
      that.form.id = row.id;
      that.form.name = row.name;
      that.dialogFormVisible =true;
      // that.$confirm("")
    },
    handleDelete(index, row) {
      // console.log(index, row);
      var that = this;
      that.$http.post(that.url+'admin/study/category/delete',{
        id:row.id
      })
      .then(res=>{
        if(res.data.code == 0){
          that.$message({
            message:res.data.msg,
            type:"success"
          });
          var newCategoryList=[];
          for(var i=0;i<that.categoryList.length;i++){
            if(that.categoryList[i].id != row.id){
              newCategoryList.push(that.categoryList[i])
            }
          }
          that.categoryList = newCategoryList;
        }else{
          that.$message.error(res.data.msg);
        }
      })
    },
    _getCateList:function(){
      var that = this;
      // console.log()
      that.$http.post(that.$store.state.url+"admin/study/category/list")
      .then(function(res){
        // console.log(res)
        if(res.data.code==0){
          that.categoryList=res.data.data;
        }
        // console.log(that.categoryList)
      })
      .catch(function(res){
        // console.log(res)
      })
    }
  },
  components:{
    VueEditor
  },
  mounted(){
    this._getCateList();
  }
}
</script>

<style  scoped lang="stylus">
   .nav
      margin 0 0 10px 0
</style>
