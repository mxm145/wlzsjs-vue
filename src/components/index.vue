<template>
  <div class="bg">
    <img src="../assets/images/pic01.jpg" alt="">
    <div class="press1"><router-link to="/game"><img src="../assets/images/img01.jpg" alt=""></router-link></div>
    <div class="press2"><router-link to="/guide"><img src="../assets/images/img02.jpg" alt=""></router-link></div>
  </div>
</template>
<script>
import axios from 'axios'
export default{
  name: 'index'
}
</script>
<style scoped>
.bg{
  width: 100%;
  height: 100%;
  position: relative;
}
.bg img{
  max-width: 100%;
}
.press1
{
  width: 6.422rem;
  position: absolute;
  left: 1.8125rem;
  top: 12.234rem;
}
.press2
{
  width: 6.422rem;
  position: absolute;
  left: 1.8125rem;
  top: 13.609rem;
}
</style>