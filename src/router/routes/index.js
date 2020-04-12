/**
 * 主页面路由
 */
export default [
  {
    path: '/',
    name: 'index',
    component: resolve => require(['@/components/index/index.vue'], resolve)
  }
]
