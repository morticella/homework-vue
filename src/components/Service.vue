<template>
    <div>
        <app-header :msg="msg"/>
        <app-posts :items="items" />
        <app-post :items="items" /> 
    </div>
</template>
<script>
import Posts from './Posts.vue'
import Header from './Header.vue'
import Post from './Post.vue'
export default {
  name: 'Service',
     components: {
         'app-header':Header,
         'app-posts':Posts,
         'app-post':Post,
     },
      
  data () {
    return {
      msg: 'Home Work',
      items: [
      {id:1, title: 'First post', shortDesc: 'This is a very short description, lorem ipse dixit', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/3/33/-LOVE-love-36983825-1680-1050.jpg', longDesc: 'This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit'},
      {id:2, title: 'Second post', shortDesc: 'This is a very short description, lorem ipse dixit', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/3/33/-LOVE-love-36983825-1680-1050.jpg', longDesc: 'This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit'},
      {id:3, title: 'Third post', shortDesc: 'This is a very short description, lorem ipse dixit', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/3/33/-LOVE-love-36983825-1680-1050.jpg', longDesc: 'This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit'},    
    ]
    }
  }
}
</script>
