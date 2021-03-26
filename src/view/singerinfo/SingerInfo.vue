<!--  -->
<template>
  <div>
    <singer-detail :info="singerinfo"/>
  </div>
</template>

<script>
import SingerDetail from "./childcomps/SingerDetail"

import {getSingerInfo} from "network/singerinfo"
export default {
  name:'SingerInfo',
  data () {
    return {
      id:null,
      singerinfo: {}
    };
  },

  components: {
    SingerDetail
  },

  computed: {},

  created(){
    this.id = this.$route.query.id
    getSingerInfo(this.id).then(res => {
      console.log(res.data);
      this.singerinfo = res.data
    })
  },

  methods: {}
}

</script>
<style scoped>
</style>