<template>
  <div class="wrapper">
    <cart />
    <header />
  </div>
</template>
<script>
  import header from './Header'
  import cart from './Cart'

  export default {
    name: 'wrapper',
    components: {
      header,
      cart
    },
    props: {},
    data() {
      return {
        title: 'main wrapper'
      }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {
      console.log('Hello')
    }
  }
</script>
<style>
  .wrapper {
    max-width: 900px;
    margin: 0 auto;
  }
</style>
  
