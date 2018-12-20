<template>

  <div class="container" v-if="$route.params.id === undefined">
    <div class="card" v-for="item in items" :key="item.title">
      <img :src="item.imgPath" class="img-responsive card-img-top" />
      <h2 class="card-title">{{ item.title }}</h2>
      <p class="card-text">{{ item.shortDesc }}</p>
      <button class="btn btn-primary" @click="singlePost(item.id)">Read More</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Posts',
 // props:['items'],
  
  methods:{
    singlePost(id){
      this.$router.push('/post/'+id);
    }
  },
  computed: {
    items() {
      return this.$store.state.items;
    }
  }
}
</script>

<style scoped>
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