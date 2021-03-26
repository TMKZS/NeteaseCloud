<!--  -->
<template>
  <div>
    <radio-item :detail= "info"/>
  </div>
</template>

<script>
import RadioItem from "./RadioItem"

export default {
  name:'RadioInfo',
  data () {
    return {
    };
  },
  props:{
    info: {
      type: Object
    } 
  },

  components: {
    RadioItem
  },

  computed: {},

  created(){
    
  },

  methods: {}
}

</script>
<style scoped>
</style>