<template>
  <div id="app">
    <div class="app_left" id="app_left">
      <img class="app_left_img" src="../static/img/left_nav.png">
      <el-menu default-active="1" class="el-menu-vertical-demo" @select="selectMenu" :collapse="isCollapse">
        <el-menu-item v-for="(item,index) in navData" :key="index" :index='item.id'>
          <i :class="item.iconSrc"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="app_right">
      <div class="app_top">
        <div class="nav_contro_menu">
          <i @click="toggleLeftMenu($event)" class="el-icon-s-fold"></i>
        </div>
      </div>
      <div class="app_bottom">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      navData: [
        {id: '1',title: '首页',iconSrc: 'el-icon-monitor'},
        {id: '2',title: '文章',iconSrc: 'el-icon-document'},
        {id: '3',title: '用户管理',iconSrc: 'el-icon-user'},
        {id: '4',title: '网站设置',iconSrc: 'el-icon-set-up'}
      ],
      isCollapse: false
    }
  },
  methods: {
    selectMenu(key, keyPath) {
      console.log(key, keyPath);
    },
    toggleLeftMenu(e){
      let app = document.getElementById('app')
      let app_left = document.getElementById('app_left')
      if(e.target.className == 'el-icon-s-fold'){
        e.target.className = 'el-icon-s-unfold'
        app.style.paddingLeft = '64px'
        app_left.style.width = '65px'
      }else{
        e.target.className = 'el-icon-s-fold'
        app.style.paddingLeft = '200px'
        app_left.style.width = '200px'
      }
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style>
* {
  padding: 0;margin: 0;
}
html {
  height: 100%;
}
body {
  background: url("../static/img/adminbg.jpg") no-repeat fixed center;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  position: relative;
  padding-left: 200px;
  height: 100%;
}
.app_left {
  position: absolute;
  left: 0;
  width: 200px;
  height: 100%;
  background: #fff;
  color: rgb(92, 181, 255);
}
.app_left_img {
  width: 100%;
}
.app_right .app_top {
  background: #fff;
  -moz-box-shadow: inset 2px 0px 3px 0px #D4D4D4;
  -webkit-box-shadow: inset 2px 0px 3px 0px #D4D4D4;
  box-shadow: inset 2px 0px 3px 0px #D4D4D4;
  height: 60px;
  line-height: 60px;
  padding: 0 10px;
  box-sizing: border-box;
}
.nav_contro_menu i {
  position: relative;
  top: 8px;
  font-size: 36px;
  color: rgb(92, 181, 255);
}
</style>
