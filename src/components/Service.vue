<template>
    <div>
        <app-header :msg="msg"/>
        <app-posts :items="items"/>
    </div>
</template>
<script>
import Posts from './Posts.vue'
import Header from './Header.vue'
export default {
  name: 'Service',
     components: {
         'app-header':Header,
         'app-posts':Posts
     },
      
  data () {
    return {
      msg: 'Home Work',
      items: [
      {title: 'First post', shortDesc: 'This is a very short description, lorem ipse dixit', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/3/33/-LOVE-love-36983825-1680-1050.jpg', longDesc: 'This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit'},
      {title: 'Second post', shortDesc: 'This is a very short description, lorem ipse dixit', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/3/33/-LOVE-love-36983825-1680-1050.jpg', longDesc: 'This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit'},
      {title: 'Third post', shortDesc: 'This is a very short description, lorem ipse dixit', imgPath: 'https://upload.wikimedia.org/wikipedia/commons/3/33/-LOVE-love-36983825-1680-1050.jpg', longDesc: 'This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit This is a very short description, lorem ipse dixit'},    
    ]
    }
  }
}
</script>
