<template>
  <div id="app">
    <leftNav :leftNavStatus="isShowLeftNav"></leftNav>
    <div class="main">
      <appTop @isShowLeftNav="updateLeftNav"></appTop>
      <router-view/>
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
</style>
