/**
 * 主页面接口列表
 */
import baseUrl from '../baseUrl'; // 导入接口域名列表
import axios from '../../api'; // 导入http中创建的axios实例

const Index = {
  getData(params){
    return axios.get(`${baseUrl.url}/index`,params)
  }
}

export default Index;
