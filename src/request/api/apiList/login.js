/**
 * 登录页面接口列表
 */
import axios from '../../http'; // 导入http中创建的axios实例

const Login = {
  toLogin(params){
    return axios.post(`${process.env.API_ROOT}/login/toLogin`,params)
  }
}

export default Login;
