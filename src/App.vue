<template>
  <NavbarView/>
  <HomeView/>
</template>

<script>
import HomeView from './components/HomeView.vue'
import NavbarView from './components/NavbarView.vue'

export default {
  name: 'App',
  components: {
    HomeView,
    NavbarView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
