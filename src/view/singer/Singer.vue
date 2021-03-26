<!--  -->
<template>
  <div>
    <singer-list></singer-list>
  </div>
</template>

<script>
import SingerList from "./childcomps/SingerList"  
export default {
  name:'Singer',
  data () {
    return {
    };
  },

  components: {
    SingerList
  },

  computed: {},


  methods: {}
}

</script>
<style scoped>
</style>