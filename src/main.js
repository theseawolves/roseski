// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
// import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Gift'
import router from './router'

// Vue.use(VueRouter)
//
// const routes = [{
//   path: '/',
//   component: Home
// }]
//
// const router = new VueRouter({
//   routes
// })

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
