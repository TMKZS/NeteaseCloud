<!--  -->
<template>
  <div class="beg">
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
  .beg {
    height: 1100px;
  }
</style>