import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Menu from "./components/Menu";
import Admin from "./components/Admin";
import About from "./components/about/About";
import Contact from "./components/about/Contact";
import phoneMumber from "./components/about/contact/phoneMumber";
import personName from "./components/about/contact/personName";
import History from "./components/about/History";
import Delivery from "./components/about/Delivery";
import OrderingGuide from "./components/about/OrderingGuide";
import Login from "./components/Login";
import Register from "./components/Register";

Vue.use(VueRouter)

// 使用export公开routes 方便main.js引用
export  const routes=[
  {path:'/',name:"homeLink",component:Home},
  {path:'/menu',name:"menuLink",component:Menu},
  {path:'/admin',name:"adminLink",component:Admin},
  {path:'/about',name:"aboutLink",redirect:'/orderingGuide',component:About, children:[
      {path:'/about/contact',name:"contactLink",redirect:'/phoneMumber',component:Contact,children: [
          {path:'/phoneMumber',name:"phoneMumber",component:phoneMumber},
          {path:'/personname',name:"personName",component:personName},
        ]},
      {path:'/history',name:"historyLink",component:History},
      {path:'/delivery',name:"deliveryLink",component:Delivery},
      {path:'/orderingGuide',name:"orderingGuideLink",component:OrderingGuide},
  ]},
  {path:'/login',name:"loginLink",component:Login},
  {path:'/register',name:"registerLink",component:Register},
  // 引导到主页
  {path:'*',redirect:'/'}
]
