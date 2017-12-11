<template>
  <div class="add">
    <el-form :model="form" label-position="left" label-width="80px">
      <el-form-item label="标题">
        <el-input placeholder="请输入文章标题" clearable v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select placeholder="请选择分类" clearable v-model="cate">
          <el-option-group v-for="(group,index) in category" :label="group.label" :key="index">
            <el-option v-for="(option,index) in group.options" :key="index" :value="option.value"></el-option>
          </el-option-group>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'study',
  data(){
    return{
      cate:"",
      category:[
        {
          label:"前端开发",
          options:[
            {
              value:"JS",
              label:"Javascript",
            },
            {
              value:"HTML",
              label:"HTML",
            },
            {
              value:"CSS",
              label:"CSS",
            },
          ]
        },
        {
          label:"后端开发",
          options:[
            {
              value:"PHP",
              label:"PHP",
            },
            {
              value:"JAVA",
              label:"JAVA",
            },
            {
              value:"MYSQL",
              label:"MYSQL",
            }
          ]
        },
        
      ],
      form:{
        title:''
      }
    }
  },
  methods:{
    
  }
}
</script>

<style  scope lang="stylus">
   
   
</style>
