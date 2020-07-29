<template>
  <div id="app">
    <p>Hello vue</p>
    <wrapper />
  </div>
</template>

<script>
  import wrapper from './components/Wrapper'

export default {
  name: 'App',
  components: {
    wrapper
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
