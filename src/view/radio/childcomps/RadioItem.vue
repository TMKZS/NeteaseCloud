<!--  -->
<template>
  <div v-if="detail.dj">
    <div class="container">
      <div class="head">
        <div class="pic">
          <img :src="detail.picUrl" alt="">
        </div>

        <div>
          <p>电台节目：{{detail.name}}</p>
          <p>主播：{{detail.dj.nickname}}</p>
        </div>        
      </div>
      <div class="but">
        <button>播放</button>
      </div>  
      <div class="mid">
        <div class="b1">{{detail.category}}</div>
        <div class="b2">{{detail.rcmdText}}</div>
        <div class="b3">{{detail.secondCategory}}</div>
      </div>
      <div>
        <div>介绍：{{detail.desc}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'RadioItem',
  data () {
    return {
    };
  },

  props: {
    detail:{
      type: Object,
      default(){
        return {}
      }
    }
  },

  components: {},

  computed: {},

  created(){
    console.log(this.detail);
    
  },

  methods: {}
}

</script>
<style scoped>
  .container {
    margin-top: 50px;
    margin-left: 200px;
  }

 .pic img{
    width: 140px;
    height: 140px;
 }

 .head {
   display: flex;
 }

 .but {
   margin-left: 50px;
   margin-top: 30px;
 }
  .mid {
    display: flex;
    justify-content: center;
  }

  .b1{
    background-color:red;
  }
  .b3{
    background-color: #b3b3b3;
  }
</style>