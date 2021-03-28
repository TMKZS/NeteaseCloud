<!--  -->
<template>
  <div>
    <div class="container">
      <div>
        <input class="inp1" type="text" placeholder="手机号" v-model="phone">
        <button class="btn1" @click="send">发送验证码</button>
      </div>
      <div>
        <input class="inp2" type="text" placeholder="验证码" >
      </div>
      <div>
        <button class="btn2">登录</button>
      </div>

    </div>
  </div>
</template>

<script>
import { getLogin } from "network/login"

export default {
  name:'Login',
  data () {
    return {
      phone: null
    };
  },

  components: {},

  computed: {},

  watch:{
    phone(){
      console.log(this.phone)
    }
  },

  created(){

  },

  methods: {
    send(){
      return getLogin(this.phone).then(res => {
        console.log(res)
      })
    }
    
  }
}

</script>
<style scoped>
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
    background-color: #b6ea7b;
    border:none;
    margin-left: 55px;
    height: 30px;
  }
</style>