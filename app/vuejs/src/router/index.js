import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import vhtml from '@/components/vhtml'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/:id',
      name: 'vhtml',
      component: vhtml
    }
  ]
})
