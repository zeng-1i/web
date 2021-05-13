import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloName from '@/views/02_data_bind/HelloName'
import Lifestyle from '@/views/02_data_bind/Lifestyle'
import DataBind from '@/views/02_data_bind/DataBind'
import directives from  '@/views/02_data_bind/directives'
import InstructionsAndEvents from '@/views/02_data_bind/InstructionsAndEvents'
import ShoppingCart from '@/views/02_data_bind/ShoppingCart'
import ToDo from '@/views/02_data_bind/ToDo'

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
    },
    {
      path: '/directives',
      component: directives
    },
    {
      path: '/InstructionsAndEvents',
      component: InstructionsAndEvents
    },
    {
      path: '/ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/ToDo',
      component: ToDo
    }
  ]
})
