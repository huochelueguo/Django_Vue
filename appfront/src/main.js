// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
import  VueResource  from 'vue-resource'
import axios from "axios";
// Vue.use(VueResource)
Vue.use(ElementUI) //使用elementUI
Vue.config.productionTip = false

Vue.prototype.$http = axios;
// axios.defaults.baseURL= 'http://127.0.0.1:8000/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
