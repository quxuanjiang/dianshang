import Vue from 'vue'
import App from './App'
import Router from 'vue-router'

import Footer from './components/footer'
import Lunbo from './components/lunbo'
import Fenlei from './components/fenlei'
import Shopping from './components/gouwu'
import About from './components/about'


Vue.use(Router);


const routes = [
{ path: '/', redirect:"/lunbo"},
{ path: '/lunbo', component:Lunbo},
{ path: '/footer', component:Footer},
{ path: '/fenlei', component:Fenlei},
{ path: '/gouwu', component:Shopping},
{ path: '/about', component:About}

]

const router=new Router({
	 routes
//	 linkActiveClass:"high"
})
Vue.config.productionTip=false


new Vue({
el: '#app',
router,
render:h=>h(App)
})
