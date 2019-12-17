<template>
  <div id="app">
    <leftNav :leftNavStatus="isShowLeftNav"></leftNav>
    <div class="main">
      <appTop @isShowLeftNav="updateLeftNav"></appTop>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import leftNav from '@/components/leftNav'
import appTop from '@/components/appTop'
export default {
  components: {
    'leftNav': leftNav,
    'appTop': appTop
  },
  name: 'App',
  data(){
    return {
      isShowLeftNav: false
    }
  },
  methods: {
   updateLeftNav(data){
     this.isShowLeftNav = data
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
  height: 100%;
  background: url('../static/img/adminbg.jpg') no-repeat fixed center;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  position: relative;
  padding-left: 200px;
  height: 100%;
}
.main {
  position: relative;
  padding-top: 80px;
  height: 100%;
  box-sizing: border-box;
}
.main .content {
  padding: 20px;
  margin-left: 20px;
  color: #fff;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(254, 255, 255, 0.322);
  border-left: 1px solid rgba(254, 255, 255, 0.322);
  box-sizing: border-box;
}
</style>
