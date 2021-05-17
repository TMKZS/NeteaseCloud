<!--  -->
<template>
  <div>
    <detail-list :Info="recommendsong" :comWord="comWord"/>
    <!-- {{$route.query.id}} -->
  </div>
</template>

<script>
import DetailList from "./childcomps/DetailList"  

import { getDetailRecommend } from "network/detail"
import { getComment } from "network/comment"

export default {
  name:'Detail',
  data () {
    return {
      id: null,
      recommendsong:{},
      comWord: []
    };
  },

  components: {
    DetailList
  },

  computed: {},

  created(){
    this.id = this.$route.query.id
    getDetailRecommend(this.id).then(res => {
      // console.log(res);
      this.recommendsong = res.data.playlist;
      // console.log(this.recommendsong.playlist);

    })

    getComment(this.id).then(res => {
      this.comWord = res.data.comments
      console.log(this.comWord)
    })
    
    
  },

  methods: {

  }
}

</script>
<style scoped>
</style>