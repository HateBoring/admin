<template>
  <div class="left_nav" id="left_nav">
    <img class="logo" src="../../static/img/left_nav.png">
    <ul>
      <li v-for="(item,index) in navData" :key="index" @click="getPage(index)" ref="navMenu">
        <div>
          <i :class="item.iconSrc"></i>
          <span v-show="leftNavStatus">{{item.title}}</span>
        </div>
      </li>
    </ul>
    <div class="desc">Yadmin后台管理系统v1.0.0</div>
  </div>
</template>

<script>
export default {
  props: ['leftNavStatus'],
  name: 'leftNav',
  data(){
    return {
      navData: [
        {id: 1,title: '首页',iconSrc: 'el-icon-monitor',path: 'index'},
        {id: 2,title: '文章',iconSrc: 'el-icon-document',path: 'article'},
        {id: 3,title: '用户',iconSrc: 'el-icon-user',path: 'user'},
        {id: 4,title: '轮播图设置',iconSrc: 'el-icon-camera',path: 'swiper'},
        {id: 5,title: '广告位',iconSrc: 'el-icon-data-line',path: 'banner'},
        {id: 6,title: '系统',iconSrc: 'el-icon-set-up',path: 'system'}
      ]
    }
  },
  mounted(){

  },
  methods: {
   getPage(index){
     let navMenu = this.$refs.navMenu
     for(let i in navMenu){
       navMenu[i].classList.remove('left_nav_active')
     }
     navMenu[index].classList.add('left_nav_active')
     console.log(this.navData[index])
     if(this.$route.path == this.navData[index].path){
       return false
     }else{
       this.$router.push({ name: this.navData[index].path})
     }
   }

  }
}
</script>

<style>
.left_nav_active {
  color: rgb(0, 132, 255) !important;
  background: #fff;
}
.left_nav {
  position: absolute;
  left: 0;
  top: 0;
  width: 200px;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  border-right: 1px solid rgba(254, 255, 255, 0.322);
  box-sizing: border-box;
}
.left_nav .logo {
  width: 100%;
}
.left_nav ul li {
  text-indent: 10px;
  font-size: 14px;
  height: 50px;
  line-height: 50px;
  color: #fff;
  cursor: pointer;
}
.left_nav ul li span {
  margin-left: 5px;
}
.left_nav ul li i {
  position: relative;
  top: 3px;
  font-size: 22px;
}
.left_nav ul li:hover {
  color: rgb(0, 132, 255);
  background: rgba(255, 255, 255,0.1);
}
.left_nav .desc {
  position: fixed;
  bottom: 10px;
  left: 0;
  width: 200px;
  text-align: center;
  font-size: 12px;
  color: rgb(134, 134, 134);
}
</style>
