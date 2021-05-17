<!--  -->
<template>
  <div class="heg">
    <chart-list></chart-list>
  </div>
</template>

<script>
import ChartList from "./childcomps/ChartList"  
export default {
  name:'Chart',
  data () {
    return {
    };
  },

  components: {
    ChartList
  },

  computed: {},


  methods: {
    
  }
}

</script>
<style scoped>
  .heg{
    height: 1200px;
  }
</style>