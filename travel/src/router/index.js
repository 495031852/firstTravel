import Vue from 'vue'
import Router from 'vue-router'
import home from '@/home/home'
import city from '@/city/city'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',  
      component: home
    },{
    	path: '/city',
    	name: 'city',
    	component: city
    }
  ]
})
