<!--  -->
<template>
  <div>
    <radio-info :info= "radioinfo"/>
  </div>
</template>

<script>
import RadioInfo from "./childcomps/RadioInfo"

import {getRadio} from "network/radio"
export default {
  name:'Radio',
  data () {
    return {
      id: null,
      radioinfo: {}
    };
  },

  components: {
    RadioInfo
  },

  computed: {},

  created(){
    this.id = this.$route.query.id
    getRadio(this.id).then(res => {
      // console.log(res.data.data)
      this.radioinfo = res.data.data
    })
    
  },

  methods: {
    
  }
}

</script>
<style scoped>
</style>