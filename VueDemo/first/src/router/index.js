import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloName from '@/views/02_data_bind/HelloName'
import Lifestyle from '@/views/02_data_bind/Lifestyle'
import DataBind from '@/views/02_data_bind/DataBind'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloName
    },
    {
      path: '/life',
      component: Lifestyle
    },
    {
      path: '/bind',
      component: DataBind
    }
  ]
})
