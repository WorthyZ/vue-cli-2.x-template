/**
 * API接口的统一出口
 */

import Login from './apiList/login';// 登陆页面接口
import Index from './apiList/indexPage';// 主页面接口
// 其他模块的接口……


// 导出接口
export default {
    Login,
    Index,
    // ……
}
