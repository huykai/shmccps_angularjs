<template>
    <i-col :span="spanLeft" class="layout-menu-left">
        <div class="layout-header">
            <i-button type="text" @click="toggleClick">
                <icon type="navicon" size="32"></icon>
            </i-button>
        </div>
        <i-menu active-name="1" theme="dark" width="auto">
            <div class="layout-logo-left"></div>
            <menu-item name="1" @onSeclect="cdrQuery">
                <icon type="ios-navigate" :size="iconSize"></icon>
                <span class="layout-text">话单查询</span>
            </menu-item>
            <menu-item name="2">
                <icon type="ios-keypad" :size="iconSize"></icon>
                <span class="layout-text">话单统计</span>
            </menu-item>
            <menu-item name="3">
                <icon type="ios-analytics" :size="iconSize"></icon>
                <span class="layout-text">话单故障分析</span>
            </menu-item>
        </i-menu>
    </i-col>
</template>

<script>
export default {
  props: {
    vueinstance: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      spanLeft: 5,
      spanRight: 19,
      vue_instance: this.vueinstance
    }
  },
  computed: {
    iconSize () {
      return this.spanLeft === 5 ? 14 : 24
    }
  },
  methods: {
    cdrQuery () {
      console.log('cdrQuery begin')
      alert('cdrQuery begin')
    },
    toggleClick () {
      // console.log(typeof this.vue_instance)
      // console.log(this.vue_instance)
      var bus = this.vue_instance
      if (this.spanLeft === 5) {
        this.spanLeft = 2
        this.spanRight = 22
        bus.$emit('change_spanLeft', 2)
      } else {
        this.spanLeft = 5
        this.spanRight = 19
        bus.$emit('change_spanLeft', 5)
      }
    }
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
