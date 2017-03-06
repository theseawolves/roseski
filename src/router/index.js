import Vue from 'vue'
import Router from 'vue-router'
import Gift from 'components/Gift'
import Category from 'components/Category'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/',
      name: 'gift',
      component: Gift
    },
  ]
})
