<template>
  <div class="login">
    <div class="login_box">
      <div class="title">—— Yadmin ——</div>
      <div class="user_box">
        <i class="el-icon-user login_icon"></i>
        <input type="text" placeholder="请输入用户名">
        <i class="el-icon-lock login_icon"></i>
        <input type="password" placeholder="请输入密码">
      </div>
      <div class="pwd_box"><el-checkbox v-model="isRemPWD">记住密码</el-checkbox></div>
      <div class="login_button" @click="getAdmin()">登陆</div>
    </div>
  </div>
</template>

<script>
import '../../static/js/demo.js'
import '../../static/js/vendors.js'
export default {
  name: 'LoginIndex',
  data () {
    return {
      isRemPWD: false
    }
  },
  mounted(){

  },
  methods: {
    getAdmin(){
      this.$router.push({ path: '/admin' })
    }
  }
}
</script>

<style>
@import '../../static/css/demo.css';
@import '../../static/css/vendors.css';

.login .el-checkbox__inner {
  background: transparent !important;
  border-color:#606266;
}
.login .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  border-color:rgb(0, 214, 252);
  background: rgb(0, 214, 252);
}
.login .el-checkbox__input.is-focus .el-checkbox__inner {
  border-color:rgb(0, 214, 252);
}
.login .el-checkbox__input.is-checked+.el-checkbox__label {
  color: rgb(0, 214, 252);
}
.login {
  width: 400px;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgb(11, 72, 83);
  position: fixed;
  left: 50%;
  top: 0;
  height: 100%;
  padding: 10px 20px;
  margin-left: -200px;
}
.login input::-webkit-input-placeholder {
  color: rgb(17, 127, 146);
}
.login .login_box {
  position: relative;
  top: 50%;
  margin-top: -200px;
  height: 300px;
}
.login .login_box .title {
  font-size: 14px;
  color: rgb(0, 214, 252);
  text-align: center;
}
.login .user_box {
  margin-top: 20px;
  padding: 0 20px;
  box-sizing: border-box;
}
.login .user_box input {
  display: block;
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 14px;
  margin-bottom: 20px;
  padding-bottom: 5px;
  color: rgb(0, 214, 252);
  letter-spacing: 4px;
  border-bottom: 1px solid rgb(0, 88, 104);
}
.login .login_icon {
  font-size: 22px;
  color: rgb(0, 214, 252);
  margin-bottom: 10px;
}
.login .login_button {
  color: rgb(0, 178, 209);
  margin: 0 20px;
  padding: 10px 0;
  text-align: center;
  border-radius: 4px;
  background: rgba(0, 57, 90, 0.377);
  cursor: pointer;
  font-size: 14px;
}
.login .login_button:hover {
  background: rgba(0, 124, 196, 0.377);
}
.login .pwd_box {
  margin: 0 20px 20px 20px;
}
</style>
