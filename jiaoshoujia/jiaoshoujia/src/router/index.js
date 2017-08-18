import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Home from "@/components//pages/home"
import Fenlei from "@/components/pages/fenlei"
import Shopping from "@/components/pages/gouwu"
import About from "@/components/pages/about"

Vue.use(Router)

const routes=[
   {path:"/",rdirect:"/home"},
   {path:"/home",component:Home},
   {path:"/fenlei",
    component:Fenlei,
    children:[
    {path:"/dianzi",component:Home},
    {}  
    ]
  },
  {path:"/gouwu",component:Shopping},
  {path:"/about",component:About},
]

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
