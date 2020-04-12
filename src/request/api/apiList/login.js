/**
 * 登录页面接口列表
 */
import baseUrl from '../baseUrl'; // 导入接口域名列表
import axios from '../../api'; // 导入http中创建的axios实例

const Login = {
  toLogin(params){
    return axios.post(`${baseUrl.url}/login/toLogin`,params)
  }
}

export default Login;
