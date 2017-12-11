<template>
  <div class="add">
    <el-form :model="form" label-position="left" label-width="80px">
      <el-form-item label="标题">
        <el-input placeholder="请输入文章标题" clearable v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select placeholder="请选择分类" clearable>
          <el-option-group :label="前端开发">
            <el-option>Javascript</el-option>
            <el-option>Html</el-option>
            <el-option>Css</el-option>
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
