<!--  -->
<template>
  <div class="nav-bar-item">
      <slot></slot>
  </div>
</template>

<script>
 
export default {
  name:'NavBarItem',
  data () {
    return {
    };
  },

  components: {
    
  },

  computed: {},


  methods: {}
}

</script>
<style scoped>
  .nav-bar-item {
    flex: 1;
    /* display: flex; */
    text-align: center;
  }
</style>