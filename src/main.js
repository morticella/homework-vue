import Vue from 'vue'
import App from './App.vue'
import Service from './components/Service.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.config.productionTip = false
Vue.component('app-service', Service);
new Vue({
  render: h => h(App),
 
}).$mount('#app')

