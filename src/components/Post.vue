<template>
  <div class="container" >
      <div v-for="item in items" :key="item.title"  >
    <div class="card"  v-if="item.id == $route.params.id">
      <img :src="item.imgPath" class="img-responsive card-img-top" />
      <h2 class="card-title">{{ item.title }}</h2>
      <p class="card-text">{{ item.longDesc }}</p>
      <button class="btn btn-primary" @click="singlePost">Back To All Posts</button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  computed: {
    items() {
      return this.$store.state.items;
    }
  },
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

<style>
.card {
  margin-bottom:50px;
}
.card-title{
  padding: 30px 0 0;
}
.card-text{
  padding:3%;
}
.btn{
  color:#fff!important;
  width: 60%!important;
  margin: 0 auto 3%!important;
}
</style>