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
  * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
</style>