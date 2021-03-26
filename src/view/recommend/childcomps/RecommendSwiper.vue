<!--  -->
<template>
  <div id="center"> 
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in banners">
        <img class="img" :src="item.imageUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

export default {
  name:'RecommendSwiper',
  data () {
    return {
    };
  },

  props: {
    banners: {
      type: Array,
      default(){
        return []
      }
    }
  },

  components: {
    
  },

  computed: {},


  methods: {}
}

</script>
<style scoped>
   /* .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } */
  .img{
    height: 100%;
    width: 100%;
  }
  .el-carousel{
    margin: 0 150px;
    
  }

</style>