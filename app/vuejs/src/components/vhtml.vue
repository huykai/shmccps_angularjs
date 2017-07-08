<template>
    <div id="app">
        <div v-html="message"></div>
    </div>
</template>
    
<script>
export default {
  name: 'vhtml',
  data () {
    return {
      message: '<h1>菜鸟教程</h1>'
    }
  }
}
</script>
