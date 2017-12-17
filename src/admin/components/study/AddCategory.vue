<template>
  <div class="add">

    <el-breadcrumb separator="/" class="nav">
      <el-breadcrumb-item>学习园地</el-breadcrumb-item>
      <el-breadcrumb-item>添加分类</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form :model="form" label-position="left" label-width="100px" ref="form" :rules="rules">

      <el-form-item label="分类名称" prop="name">
        <el-col :span="14">
          <el-input placeholder="请输入分类名称" clearable v-model="form.name"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="分类" prop="pid">
        <el-select placeholder="请选择分类" clearable v-model="form.pid">
          <el-option
            v-for="item in category"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <!-- <vue-editor v-model="content"></vue-editor> -->
      <el-form-item>
        <el-button @click="submit" type="primary">确 认</el-button>
      </el-form-item>
    </el-form>
  
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import { mapState } from 'vuex'

export default {
  name: 'add',
  data(){
    return{
      cate:"",
      category:[
        {
          label:"主分类",
          value:0
        },
      ],
      form:{
        name:"",
        pid:0,
      },
      rules:{
        name:[
          { required: true, message: '请输入分类名称', trigger: 'blur' },
          { max: 15, message: '长度在15个字符以内', trigger: 'blur' }
        ],
        pid:[
           { required: true, message: '请选择分类', trigger: 'blur' },
        ]
      }
    }
  },
  created(){
    console.log(this.$store.state.count)
  },
  computed:mapState({
    num:state=>state.count,
    name:state=>state.username,
    url:state=>state.url
  }),
  methods:{
    submit(){
      var that = this;
      that.$refs.form.validate((valid)=>{
        console.log(that.form)
        if(valid){
          // alert('1')
          that.$http.post(that.url+'/admin/study/category/add',that.form)
          .then(function(res){
            console.log(res)
            if(res.data.code == 0){
              that.$message({
                message: res.data.msg,
                type: 'success'
              });
              that.form={
                name:'',
                pid:0
              }
            }else{
              that.$message.error(res.data.msg);
            }
          })
          .catch(function(res){
            that.$message.error("网络错误");
          })
        }
      })
    },
    _getCateList:function(){
      var that = this;
      // console.log()
      that.$http.post(that.$store.state.url+"admin/study/category/list",{pid:0})
      .then(function(res){
        // console.log(res)
        if(res.data.code==0){
          res.data.data.forEach(item => {
              that.category.push({
                label:item.name,
                value:item.id
              })
          });
        }
        // console.log(that.category)
      })
      .catch(function(res){
        // that.$message.
        // console.log
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
