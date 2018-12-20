import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {store} from './store'
import Post from './components/Post.vue'
import Posts from './components/Posts.vue'
import Header from './components/Header.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.use(VueRouter);
const routes = [
  {path: '/post/:id', component: Post},
  {path: '/', component: Posts}
];
const router = new VueRouter({
  routes,
  mode: 'history'
});
Vue.component('app-header', Header);
new Vue({
  router,
  store,
  render: h => h(App),
 
}).$mount('#app')

