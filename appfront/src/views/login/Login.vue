<template >
  <div class="login">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="login-page">
      <h3 class="title">系 统 登 录</h3><br>
<!--      用户名-->
      <el-form-item label="用户名：" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
<!--      密码-->
      <el-form-item label="密码：" prop="password">
        <el-input type="password" v-model="ruleForm.password"/>
      </el-form-item>
<!--      登录和重置-->
      <el-form-item class="btns">
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
    // 提交方法
    submitForm(formName) {
      let {name, password} = this.ruleForm
      console.log(name)
      console.log(password)
      this.$http.get('http://127.0.0.1:8000/login_action?username=sunze&password=123456')
        .then((response) => {
          var res = JSON.parse(response.bodyText)
          if (res.error_num == 0) {
            this.showBooks()
          } else {
            this.$message.error('新增书籍失败，请重试')
            console.log(res['msg'])
          }
        })
    },
      // // 检查是否拿到了正确的需要验证的form
      // this.$refs[formName].validate((valid) =>{
      //   if (valid){
      //     const _this = this
      //     // axios 发送请求
      //     axios.get("/login_action？",{
      //         username: name,
      //         password: password
      //     }).then(
      //       function (resp) {
      //         const flag = resp.data.request['flag']
      //         if (flag == 'yes'){
      //             console.log(resp)
      //           // console.log(resp.data.request['flag'])
      //           // 请求成功后进行跳转 由于this 指向问题 加上了_this
      //           // _this.$router.push("/index")
      //         }else {
      //           alert("错误登录")
      //         }
      //       }
      //     )
      //     // 开始用的 axios 发送请求
      //     // console.log(this.ruleForm)
      //   }else {
      //     alert("验证错误")
      //   }
      // })


    // 输入框重置
    resetForm(formName){
      this.$refs[formName].resetFields();
    }
  }


}
</script>

<style scoped>

  .login {
    background-color: #B3C0D1;
    height: 600px;
    text-align: center;
  }
  .login-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .btns{
    display: flex;
    justify-content:flex-end;
  }


</style>
