import Vue from 'vue'
import Router from 'vue-router'
import home from '@/home/home'
import city from '@/city/city'
import detail from '@/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',  
      component: home
    },
    {
    	path: '/city',
    	name: 'city',
    	component: city
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    }
  ]
})
