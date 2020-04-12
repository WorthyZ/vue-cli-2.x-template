/**
 * 路由统一出口
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import login from './routes/login.js'
import index from './routes/index.js'

let routes = new Array().concat(login).concat(index)


export default new Router({
  routes,
})
