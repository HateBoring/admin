<template>
  <div class="login">
    <div class="login_box">
      <div class="title">—— 后端登陆系统 ——</div>
      <div class="user_box">
        <i class="el-icon-user login_icon"></i>
        <input type="text" placeholder="请输入用户名">
        <i class="el-icon-lock login_icon"></i>
        <input type="password" placeholder="请输入密码">
      </div>
      <div class="login_button">登陆</div>
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
    }
  },
  mounted(){

  },
  methods: {

  }
}
</script>

<style>
@import '../../static/css/demo.css';
@import '../../static/css/vendors.css';

.login_box {
  width: 400px;
  height: 300px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(0, 88, 104);
  position: fixed;
  left: 50%;
  top: 50%;
  padding: 20px;
  box-sizing: border-box;
  margin: -150px 0 0 -200px;
  border-radius: 20px;
}
.login_box .title {
  font-size: 18px;
  color: rgb(0, 214, 252);
  text-align: center;
}
.user_box {
  margin-top: 20px;
  padding: 0 20px;
  box-sizing: border-box;
}
.user_box input {
  display: block;
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  margin-bottom: 20px;
  padding-bottom: 5px;
  color: rgb(0, 156, 184);
  border-bottom: 1px solid rgb(0, 88, 104);
}
.login_icon {
  font-size: 22px;
  color: rgb(0, 214, 252);
  margin-bottom: 10px;
}
.login_button {
  color: rgb(0, 178, 209);
  margin: 0 20px;
  padding: 10px 0;
  text-align: center;
  border-radius: 5px;
  background: rgba(0, 57, 90, 0.377);
  cursor: pointer;
}
.login_button:hover {
  background: rgba(0, 124, 196, 0.377);
}
</style>
