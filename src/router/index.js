import Vue from 'vue'
import Router from 'vue-router'
import Gift from 'components/Gift'
import Category from 'components/Category'
import Tag from 'components/Tag'
import Detail from 'components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/tag',
      name: 'tag',
      component: Tag
    },
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
