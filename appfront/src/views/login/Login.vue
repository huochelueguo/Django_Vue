<template>
  <div class="login">
    <p>this is login page</p>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
<!--      用户名-->
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"/>
      </el-form-item>
<!--      密码-->
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"/>
      </el-form-item>
<!--      登录和充值-->
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      // 初始化
      ruleForm: {
        name: '',
        password: '',
      },
      // 验证规则
      rules: {
        name: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],
      }}},
  methods:{
    // 验证登陆是否成功
    submitForm(formName){
      this.$router.push("/home");
      console.log(formName)
    },
    // 输入框重置
    resetForm(formName){
      this.$refs[formName].resetFields();
    }
  }


}
</script>

<style scoped>

</style>
