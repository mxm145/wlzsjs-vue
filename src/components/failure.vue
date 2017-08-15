<template>
  <div class="bg">
    <img src="../assets/images/pic05.jpg" alt="">
    <div class="press" @click="again"><img src="../assets/images/img06.png" alt=""></div>
  </div>
</template>
<script>
export default {
  name: 'failure',
  methods: {
    again(){
      this.$store.commit('SET_STAGE', 1)
      this.$router.replace('/game')
    }
  }
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
.press
{
  width: 2.875rem;
  position: absolute;
  left: 3.547rem;
  top: 5.547rem;
}
</style>