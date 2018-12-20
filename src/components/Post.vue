<template>
  <div class="container" >
      <div v-for="item in items" :key="item.title"  >
    <div class="card"  v-if="item.id == $route.params.id">
      <img :src="item.imgPath" class="img-responsive card-img-top" />
      <h2 class="card-title">{{ item.title }} {{ $route.params.id }}</h2>
      <p class="card-text">{{ item.longDesc }}</p>
      <button class="btn btn-primary" @click="singlePost">Back To All Posts</button>
    </div>
    </div>
  </div>
</template>

<script>

export default {
    
  name: 'Post',
  props:['items'],
  watch:{
      '$route'(to){
          this.$route.params.id = to.params.id   
      }
  },
  methods:{
    singlePost(){
      this.$router.push('/');
    }
  }
  
}

</script>