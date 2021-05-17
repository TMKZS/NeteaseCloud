<!--  -->
<template>
  <div class="bg">
    <div class="container">
      <div>
        <input class="inp1" type="text" placeholder="呢称" v-model="nickname">
      </div>
      <div>
        <input class="inp2" type="text" placeholder="手机号" v-model="phone" >
        <button class="btn1" @click="send" ref = "addNum">获取验证码</button>
      </div>
      <div>
        <input class="inp2" type="password" placeholder="密码" v-model="password">
      </div>
      <div>
        <input class="inp2" type="text" placeholder="验证码" v-model="captcha">
      </div>
      <div>
        <button class="btn3" @click="reg">注册</button>
      </div>

    </div>
  </div>
</template>

<script>
import { getLogin } from "network/login"
import { getRegister } from "network/register"
export default {
  name:'Register',
  data () {
    return {
      nickname: '',
      phone: '',
      password: '',
      captcha: '',
    };
  },

  components: {},

  computed: {},


  methods: {
    send() {

      if(!/^1[345678]\d{9}$/.test(this.phone)){ 
        alert("手机号码有误，请重填");  
        return false; 
    }
      let time = 60;
      let timer = setInterval(() => {
        if (time == 0) {
          clearInterval(timer);

        
          this.$refs.addNum.innerText = "获取验证码";
          this.$refs.addNum.disabled = false
          // this.btnTitle = "获取验证码";
          // this.disabled = false;
        } else {
          // 倒计时
          
          this.$refs.addNum.innerText = time + "秒后重试";
          this.$refs.addNum.disabled = true
          // this.btnTitle = time + "秒后重试";
          // this.disabled = true;
          time--;
        }
      }, 1000);
      

      return getLogin(this.phone).then(res => {
        console.log(res)
      })
    },
    reg() {
      //这个地方用return 会出现505报错

      if(!/^1[345678]\d{9}$/.test(this.phone)){ 
        alert("手机号码有误，请重填");  
        return false; 
    } 

    
      return getRegister(this.captcha, this.phone, this.password, this.nickname,).then(res => {
        this.$router.push('login')
      }).catch(res => {
        console.log('失败')
      })
    }
  }
}

</script>
<style scoped>
.bg {
    box-sizing: border-box;
    /* background-color: #f4f4f4; */
  }
  .container{
    margin-top: 200px;
    margin-left: 550px;
  }


  .btn1 {
    margin-left: -96px;
    height: 34px;
  }
  .inp1, .inp2{
    width: 350px;
    height: 30px;
  }
  .inp2 {
    margin-top: 20px;
  }

  .btn2 {
    margin-top: 40px;
    width: 250px;
    background-color: #48ca38;
    border:none;
    margin-left: 55px;
    height: 30px;
  }

  .btn3 {
    border:none;
    width: 300px;
    margin-left: 30px;
    margin-top: 20px;
    color: green;
    
  }
</style>