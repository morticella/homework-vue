<template>
  <div class="container">
    <div class="card" v-for="item in items" :key="item.title">
      <img :src="item.imgPath" class="img-responsive card-img-top" />
      <h2 class="card-title">{{ item.title }} </h2>
      <p class="card-text">{{ item.shortDesc }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Posts',
  props:['items']
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  margin-bottom:50px;
}
.card-title{
  padding: 30px 0;
}
.card-text{
  padding:3%;
}
</style>