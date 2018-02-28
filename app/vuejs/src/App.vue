<!--
<template>
  <div id="app">
    <a href='#/'><img src="./assets/logo.png"></a>
    <a href='#/1'><img src="./assets/logo.png"></a>
    <router-view></router-view>
  </div>
</template>
-->

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
