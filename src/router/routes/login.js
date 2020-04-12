/**
 * 登陆页面路由
 */
export default [
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['@/components/login/login.vue'], resolve)
  }
]
