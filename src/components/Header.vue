<template>
<nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1">{{msg}}</span>
</nav>
</template>
<script>

export default {
  name: 'Header',
  props: ['msg'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
    margin-bottom:3%;
}
</style>