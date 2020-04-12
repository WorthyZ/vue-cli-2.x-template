<template>
<div class="box">
	<div style="font-size: 20px; font-weight: bold; text-align: center; margin: 20px;">
    登陆
	</div>
  <van-cell-group style="padding-top: 10px;">
    <van-field
      v-model="userName"
      required
      clearable
      label="用户名"
      placeholder="请输入用户名"
    />
    <van-field
      v-model="password"
      type="password"
      label="密码"
      placeholder="请输入密码"
      required
    />
    <div style="height: 40px;"></div>
    <van-button type="info" size='large' @click="toLogin">登陆</van-button>
  </van-cell-group>
</div>
</template>

<script>
import { Field,CellGroup,Button } from 'vant';
import API from '@/request/api/router.js';
import { mapState,mapMutations,mapGetters } from 'vuex';

export default {
	components:{
		[Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
	},
	data() {
		return {
      userName:null, //用户名
      password:null, //密码
		};
	},
  methods:{
    // 提交登录信息
    toLogin(){
      API.Login.toLogin({
        userName:this.userName,
        password:this.password
      }).then(res=>{
        console.log(res)
        if (res.data.code==0) {
          var path = this.$route.query.redirect||'/index'
          this.$router.push({
            path
          })
        } else{
          alert(res.data.msg);
        }
      }).catch(err=>{
        console.log(err)
      })
    },
    ...mapMutations(['setToken']),
  },
  created:function(){
    // console.log(this.$route.query.redirect)
  },
  computed:{
    ...mapState(['token']),
  }
}
</script>

<style scoped>
.box{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border: 1px solid #eee;
}
</style>
