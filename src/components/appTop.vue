<template>
  <div class="app_top">
    <div class="left_nav_menu">
      <i class="el-icon-s-fold" @click="controllerLeftNav($event)"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appTop',
  data() {
    return {

    }
  },
  methods: {
    controllerLeftNav(e){
      let left_nav = document.getElementById('left_nav')
      let app = document.getElementById('app')
      if(e.target.className == 'el-icon-s-fold'){
        e.target.className = 'el-icon-s-unfold'
        left_nav.style.width = '66px'
        app.style.paddingLeft = '66px'
        this.$emit('isShowLeftNav',false)
      }else{
        e.target.className = 'el-icon-s-fold'
        left_nav.style.width = '200px'
        app.style.paddingLeft = '200px'
        this.$emit('isShowLeftNav',true)
      }
    }
  }
}
</script>

<style scoped>
.app_top {
  height: 60px;
  line-height: 60px;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  border-bottom: 1px solid rgba(254, 255, 255, 0.322);
  box-sizing: border-box;
  padding: 0 20px;
}
.app_top .left_nav_menu {
  float: left;
  position: relative;
  top: 5px;
  cursor: pointer;
}
.app_top .left_nav_menu i {
  font-size: 28px;
}
</style>