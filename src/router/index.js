import Vue from 'vue'
import Router from 'vue-router'
import LoginIndex from '@/view/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginIndex',
      component: LoginIndex
    }
  ]
})
