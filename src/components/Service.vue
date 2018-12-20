<template>
    <div>
        <app-header />
        <app-posts />
        <app-post /> 
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
      

}
</script>
