<template>
  <div class="add">

    <el-breadcrumb separator="/" class="nav">
      <el-breadcrumb-item>学习园地</el-breadcrumb-item>
      <el-breadcrumb-item>新增笔记</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form :model="form" label-position="left" label-width="100px" ref="form" :rules="rules">

      <el-form-item label="标题" prop="title">
        <el-col :span="14">
          <el-input placeholder="请输入文章标题" clearable v-model="form.title"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="分类" prop="cid">
        <el-select placeholder="请选择分类" clearable v-model="form.cid">
          <el-option-group v-for="(group,index) in category" :label="group.label" :key="index">
            <el-option v-for="(option,index) in group.options" :key="index" :value="option.value" :label="option.label"></el-option>
          </el-option-group>
        </el-select>
      </el-form-item>
      
      <el-form-item label="文章内容" prop="content">
        <el-col :span="14">
          <vue-editor v-model="form.content"></vue-editor>
        </el-col>
      </el-form-item >
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
          label:"前端开发",
          options:[
            {
              value:"1",
              label:"Javascript",
            },
            {
              value:"2",
              label:"HTML",
            },
            {
              value:"3",
              label:"CSS",
            },
          ]
        },
        {
          label:"后端开发",
          options:[
            {
              value:"4",
              label:"PHP",
            },
            {
              value:"5",
              label:"JAVA",
            },
            {
              value:"6",
              label:"MYSQL",
            }
          ]
        },
        
      ],
      form:{
        title:'',
        cid:'',
        content:''
      },
      rules:{
        title:[
          { required: true, message: '请输入文章标题', trigger: 'blur' },
          { max: 30, message: '长度在30个字符以内', trigger: 'blur' }
        ],
        cate:[
           { required: true, message: '请选择分类', trigger: 'blur' },
        ],
        content:[
           { required: true, message: '请编辑文章内容', trigger: 'blur' },
        ],
      }
    }
  },
  created(){
    console.log(this.$store.state.count)
  },
  computed:mapState({
    num:state=>state.count,
    name:state=>state.username
  }),
  methods:{
    submit(){
      var that = this;
      that.$store.commit('add')
      that.$refs.form.validate((valid)=>{
        console.log(that.form)
        if(valid){
          // alert('1')
          that.$http.post('http://zhu.admin.net:80/api/admin/study/node/add',that.form)
          .then(function(res){
            console.log(res)
            if(res.data.code == 0){
              that.$message({
                message: res.data.msg,
                type: 'success'
              });
              that.form={
                title:'',
                cid:'',
                content:''
              }
            }else{
              that.$message.error(res.data.msg);
            }
          })
          .catch(function(res){
            that.$message.error("网络错误");
          })
        }else{
          // alert('2')
          console.log("2")
          
          return false;
        }
      })
    }
  },
  components:{
    VueEditor
  }
}
</script>

<style  scoped lang="stylus">
   .nav
      margin 0 0 10px 0
</style>
