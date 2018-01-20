<template>
    <div id="app">
        <div class="layout" :class="{'layout-hide-text': spanassign.spanLeft < 5}">
            <row type="flex">
                <leftpage :vueinstance="vueinstance"> </leftpage>
                <rightpage :vueprops="vueprops" > </rightpage>
            </row>
        </div>
    </div>
    <!-- :span="spanassign.spanRight" -->
</template>
     
<script>
// import leftpage from '@/components_module/leftpage'
import Vue from 'vue'
import leftpage from '@/components/LeftPage'
import rightpage from '@/components/RightPage'
export default {
  data () {
    var vuetmp = new Vue()
    var spanAssign = {
      spanLeft: 5,
      spanRight: 19
    }
    vuetmp.$on('change_spanLeft', (value) => {
      console.log('change_spanLeft value: ', value)
      this.vueprops.span = 24 - value
    })
    const vueprops = {
      vueinstance: vuetmp,
      span: spanAssign.spanRight
    }
    return {
      vueinstance: vuetmp,
      spanassign: spanAssign,
      vueprops: vueprops
    }
  },
  computed: {
  },
  methods: {
  },
  components: {
    'leftpage': leftpage,
    'rightpage': rightpage
  }
}
</script>

<style scoped>
.layout{
border: 1px solid #d7dde4;
background: #f5f7f9;
position: relative;
border-radius: 4px;
overflow: hidden;
}
.layout-breadcrumb{
padding: 10px 15px 0;
}
.layout-content{
min-height: 600px;
margin: 15px;
overflow: hidden;
background: #fff;
border-radius: 4px;
}
.layout-content-main{
padding: 10px;
}
.layout-copy{
text-align: center;
padding: 10px 0 20px;
color: #9ea7b4;
}
.layout-menu-left{
background: #464c5b;
}
.layout-header{
height: 60px;
background: #fff;
box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.layout-logo-left{
width: 90%;
height: 30px;
background: #5b6270;
border-radius: 3px;
margin: 15px auto;
}
.layout-ceiling-main a{
color: #9ba7b5;
}
.layout-hide-text .layout-text{
display: none;
}
.ivu-col{
transition: width .2s ease-in-out;
}
</style>
