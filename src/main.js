import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCarousel from 'vue-carousel'
import App from './App.vue'
import router from './router/index.js'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueCarousel)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
