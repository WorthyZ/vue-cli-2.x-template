<template>
  <div class="boxBody">
    <div class="box">
      <div class="login">
        <!-- 第一行 蓝色背景-->
        <div class="blue"></div>
        <!-- 黑色块左边三角形 -->
        <div class="tri"></div>
        <form action="" class="form">
          <!-- 白色背景 -->
          <ul>
            <!-- Login System -->
            <li class="loginSystem">Login System</li>
            <!-- Username -->
            <li><label for="ipt1">Username:&nbsp;</label><input type="text" class="ipt" v-model="userName"></li>
            <!-- Password -->
            <li class="pw"><label for="ipt2">Password:&nbsp;</label><input type="text" class="ipt" v-model="password">
            <!-- Button -->
            <li class="btn">
              <input type="image" src="@/../static/images/login/loginBtn.png" @click="toLogin">
              <i>|</i>
              <input type="checkbox" class="cb" v-model="rememberFlag"><em>Remember me</em>
            </li>
            <li class="lang">Language:&nbsp;Chinese&nbsp;|&nbsp;English</li>
          </ul>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    Field,
    CellGroup,
    Button
  } from 'vant';
  import API from '@/request/api/router.js';
  import {
    mapState,
    mapMutations,
    mapGetters
  } from 'vuex';
  export default {
    data() {
      return {
        userName: null, //用户名
        password: null, //密码
        rememberFlag:false, //记住密码标志
      }
    },
    methods: {
      toLogin() {
        API.login.toLogin({
          userName: this.userName,
          password: this.password
        }).then(res => {
          console.log(res)
          if (res.data.code == 0) {
            this.setToken(res.data.body);
          } else {
            alert(res.data.msg);
          }
        }).catch(err => {
          console.log(err)
        })
      },
      ...mapMutations(['setToken']),
    },
    computed: {
      ...mapState(['token']),
    },
    created:function(){
      this.userName = localStorage.getItem('userName');
      this.password = localStorage.getItem('password');
    },
    watch:{
      rememberFlag(val){
        if (val) {
          localStorage.setItem('userName',this.userName);
          localStorage.setItem('password',this.password);
        } else{
          localStorage.removeItem('userName');
          localStorage.removeItem('password');
        }
      }
    }
  }
</script>

<style scoped>
  .boxBody {
    width: 100vw;
    height: 100vh;
    margin-right: 0;
    font-family: Arial;
    font-size: 12px;
    background: url("../../../static/images/login/body_bg.png") #5fb6d4 repeat-x;
  }

  ul,
  li,
  form,
  input {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  img {
    vertical-align: bottom;
  }

  .box {
    width: 470px;
    height: 302px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -151px 0 0 -235px;
  }

  .login {
    width: 100%;
    height: 100%;
    position: relative;
    background: #fff;
  }

  .login .tri {
    width: 17px;
    height: 57px;
    background: url("../../../static/images/login/tri.png");
    position: absolute;
    top: 71px;
    left: -17px;
  }

  .blue {
    width: 100%;
    height: 50px;
    background: #c5e6eb;
    border-bottom: 1px #afcfce solid;
  }

  .form {
    width: 100%;
    height: 251px;
  }

  .form ul {
    width: 100%;
    height: 100%;
  }

  .form ul li {
    height: 28px;
    margin-top: 15px;
    margin-left: 28px;
    line-height: 28px;
    font-weight: bold;
  }

  .form ul li .ipt {
    border: 0;
    width: 282px;
    height: 28px;
    padding-left: 5px;
    background: url("../../../static/images/login/text_bg.png");
    outline: none;
  }

  .form ul li.pw label,
  .form ul li.pw input {
    float: left;
  }

  .form ul li.pw a {
    float: left;
    margin: -7px 0 0 2px;
  }

  .form li.loginSystem {
    width: 378px;
    height: 48px;
    color: #fff;
    line-height: 48px;
    padding-left: 34px;
    font-size: 24px;
    background: #424242;
    margin: 20px 0 5px 0;
  }

  .form li.btn {
    height: 29px;
    padding-left: 60px;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
  }

  .form li.btn i {
    float: left;
    padding: 0 15px;
  }

  #btn {
    float: left;
  }

  .form li.btn .cb {
    margin-right: 5px;
  }

  .form li.btn em {
    float: left;
    font-style: normal;
    font-weight: normal;
  }

  .form li.lang {
    color: #CAC6C7;
    width: 100%;
    padding-left: 110px;
  }
</style>
