import Vue from 'vue'
import Router from 'vue-router'
import Gift from 'components/Gift'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Gift',
      component: Gift
    }
  ]
})
