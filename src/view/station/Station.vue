<!--  -->
<template>
  <div>
    <div class="bgc">
      <station-list/>
    </div>
    
  </div>
</template>

<script>
import StationList from "./childcomps/StationList"  
export default {
  name:'Station',
  data () {
    return {
    };
  },

  components: {
    StationList
  },

  computed: {},


  methods: {}
}

</script>
<style scoped>
  .bgc {
    background-color: #f5f5f5;
    /* height: 2000px; */
  }
</style>