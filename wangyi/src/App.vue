<template>
  <div id="app">
    <Header/>
    <router-view/>
    <FootGuide/>
  </div>
</template>

<script type="text/ecmascript-6">
  import FootGuide from './components/FootGuide/FootGuide.vue'
  import Header from './components/Header/Header.vue'
  import HomePage from './pages/HomePage/HomePage.vue'

  export default {
    name:'App',
    components:{
      FootGuide,
      Header,
      HomePage,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    width 100%
    height 100%
</style>
