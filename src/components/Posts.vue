<template>
  <div >
    <h1>{{msg}}</h1>
    <ul>
  <li v-for="item in items" :key="item.title">
    {{ item.title }} 
    <hr>
    <img :src="item.imgPath" />
    <hr>
    {{ item.shortDesc }} 
    <hr>
  </li>
</ul>
  </div>
</template>



<script>
export default {
  name: 'Posts',
  data () {
    return {
      msg: 'Home Work',
      items: [
      {title: 'First post', shortDesc: 'This is a very short description, lorem ipse dixit', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/3/33/-LOVE-love-36983825-1680-1050.jpg'},
      {title: 'Second post', shortDesc: 'This is a very short description, lorem ipse dixit', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/3/33/-LOVE-love-36983825-1680-1050.jpg'},
      {title: 'Third post', shortDesc: 'This is a very short description, lorem ipse dixit', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/3/33/-LOVE-love-36983825-1680-1050.jpg'},    
    ]
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  max-width:100%;
}
</style>