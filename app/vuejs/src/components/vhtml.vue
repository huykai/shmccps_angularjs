<template>
    <div id="app">
        <div v-html="message"></div>
        <div v-html="hostname"></div>
        <div >ID: {{$route.params.id}}</div>
    </div>
</template>
    
<script>
export default {
  name: 'vhtml',
  data () {
    return {
      message: '<h2>菜鸟教程</h2>',
      hostname: '<h2>192.168.1.126</h2>'
    }
  }
}
</script>
