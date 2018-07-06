import Vue from 'vue'
// import iView from 'iview'

// Vue.use(iView)
/* eslint-disable no-new */
var leftpage = Vue.component('leftpage', {
  template: `
  
  <i-col :span="spanLeft" class="layout-menu-left">
      <div class="layout-header">
          <i-button type="text" @click="toggleClick">
              <icon type="navicon" size="32"></icon>
          </i-button>
      </div>
      <i-menu active-name="1" theme="dark" width="auto">
          <div class="layout-logo-left"></div>
          <menu-item name="1">
              <icon type="ios-navigate" :size="iconSize"></icon>
              <span class="layout-text">Option 1</span>
          </menu-item>
          <menu-item name="2">
              <icon type="ios-keypad" :size="iconSize"></icon>
              <span class="layout-text">Option 2</span>
          </menu-item>
          <menu-item name="3">
              <icon type="ios-analytics" :size="iconSize"></icon>
              <span class="layout-text">Option 3</span>
          </menu-item>
      </i-menu>
  </i-col>
  
  `,
  data () {
    return {
      spanLeft: 5,
      spanRight: 19
    }
  },
  computed: {
    iconSize () {
      return this.spanLeft === 5 ? 14 : 24
    }
  },
  methods: {
    toggleClick () {
      if (this.spanLeft === 5) {
        this.spanLeft = 2
        this.spanRight = 22
      } else {
        this.spanLeft = 5
        this.spanRight = 19
      }
    }
  }
})

export default leftpage
