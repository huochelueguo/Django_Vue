import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../views/home/HomePage'
import Login from '../views/login/Login'
import Help from '../views/home/help/help'
import Index from '../views/home/index/index'
import Apis from '../views/home/apis/index'
import apiAdd from "../views/home/apis/apiAdd";
import apiSerch from "../views/home/apis/apiSerch";
Vue.use(Router);

export default new Router({
  routes: [
    // 不输入内容和输入home都跳转到homepage
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      // 首页布局
      path: '/home',
      name:'HomePage',
      component: HomePage,
      children:[
        //首页点击帮助
        {
          path: '/help',
          name: 'help',
          component: Help
        },
        // 真正的首页
        {
          path: '/index',
          name: 'index',
          component: Index,
        },
        {
          path: '/apis/apiAdd',
          name: 'apiAdd',
          component: apiAdd
        },
        {
          path: '/apis/apiSerch',
          name: 'apiSerch',
          component: apiSerch
        },
      ]
    },
    // 登录页面路由
    {
      path: '/login',
      name:'login',
      component: Login
    },
    // 帮助页面路由
    {
      path: '/help',
      name:'help',
      component: Help
    },
    {
      path: '/apis',
      name: 'apis',
      component: Apis,
      childern:[

      ]
    }


  ]

})
