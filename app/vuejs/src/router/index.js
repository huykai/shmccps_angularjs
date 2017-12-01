import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import vhtml from '@/components/vhtml'
import mainpage from '@/components/mainpage'

import 'iview/dist/styles/iview.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: mainpage
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/temp',
      name: 'vhtml',
      component: vhtml
    }
  ]
})
