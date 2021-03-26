<!--  -->
<template>
  <div>
    <div class="nav-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'NavBar',
  data () {
    return {
    };
  },

  components: {},

  computed: {},


  methods: {}
}

</script>
<style scoped>
  .nav-bar {
    display: flex;
    /* flex: 1; */
    width: 100%;
  }

</style>