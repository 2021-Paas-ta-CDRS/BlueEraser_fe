import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuesax from 'vuesax'
import App from './App.vue'
import router from './router/index.js'
import 'vuesax/dist/vuesax.css' //Vuesax styles


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuesax)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
