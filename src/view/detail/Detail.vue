<!--  -->
<template>
  <div>
    <detail-list :Info="recommendsong"/>
    <!-- {{$route.query.id}} -->
  </div>
</template>

<script>
import DetailList from "./childcomps/DetailList"  

import { getDetailRecommend } from "network/detail"
export default {
  name:'Detail',
  data () {
    return {
      id: null,
      recommendsong:{}
    };
  },

  components: {
    DetailList
  },

  computed: {},

  created(){
    this.id = this.$route.query.id
    getDetailRecommend(this.id).then(res => {
      console.log(res);
      this.recommendsong = res.data.playlist;
      // console.log(this.recommendsong.playlist);

    })
    
  },

  methods: {

  }
}

</script>
<style scoped>
</style>