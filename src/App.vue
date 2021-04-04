<template>
  <div id="app">  
    <main-tab-bar/>
    <main-nav-bar/>
    <router-view/>
    <player/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/maintabbar/MainTabBar'
import MainNavBar from 'components/content/mainnavbar/MainNavBar'
import Player from 'components/content/player/Player'

export default {
  name: 'App',
  components: {
    MainTabBar,
    MainNavBar,
    Player
  }
}
</script>

<style>
  @import 'assets/css/normalize.css';
</style>
