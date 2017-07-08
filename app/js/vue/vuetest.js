Vue.component('button-counter', {
  template: '<button v-on:click="increment">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    increment: function () {
      this.counter += 1
      this.$emit('increment')
    }
  },
})
var Child = {
  template: '<h1>自定义组件_Child!</h1>'
}
// 注册
Vue.component('runoob', {
  template: '<h1>自定义组件!</h1>'
})
Vue.component('child', {
  // 声明 props
  props: ['message'],
  // 同样也可以在 vm 实例中像 "this.message" 这样使用
  template: '<span>{{ message }}</span>'
})
// 创建根实例
new Vue({
  el: '#app',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    }
  },
  components: {
    // <runoob> 将只在父模板可用
    'runoob_1': Child
  }
})