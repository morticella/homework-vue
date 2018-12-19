<template>
  <div id="app">
    <Posts />
  </div>
</template>

<script>
import Posts from './components/Posts.vue'

export default {
  name: 'app',
  components: {
    Posts,
  }
}
// var posts = new Vue({
//   el: '#posts',
//   data: {
//        items: [
//       {title: 'First post', shortDesc: 'This is a very short description, lorem ipse dixit', imgPath: 'https://cdn.pixabay.com/photo/2012/11/29/02/50/heart-67848_960_720.jpg'},
//       {title: 'Second post', shortDesc: 'This is a very short description, lorem ipse dixit', imgPath: 'https://cdn.pixabay.com/photo/2012/11/29/02/50/heart-67848_960_720.jpg'},
//       {title: 'Third post', shortDesc: 'This is a very short description, lorem ipse dixit', imgPath: 'https://cdn.pixabay.com/photo/2012/11/29/02/50/heart-67848_960_720.jpg'},    
//     ]
//   }
// })
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
