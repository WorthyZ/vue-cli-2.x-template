/**
 * 主页面接口列表
 */
import axios from '../../http'; // 导入http中创建的axios实例

const Index = {
  getData(params){
    return axios.get(`${process.env.API_ROOT}/index`,params)
  }
}

export default Index;
