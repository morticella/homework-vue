import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Service from './components/Service.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.use(VueRouter);
const routes = [
  {path: '/post/:id', component: Service},
  {path: '/', component: Service}
];
const router = new VueRouter({
  routes,
  mode: 'history'
});
Vue.component('app-service', Service);
new Vue({
  router,
  render: h => h(App),
 
}).$mount('#app')

