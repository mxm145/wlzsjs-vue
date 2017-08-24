<template>
  <div class="bg">
    <img src="../assets/images/pic04.jpg" alt="">
    <div class="press" @click="award"><img src="../assets/images/img05.png" alt=""></div>
  </div>
</template>
<script>
export default{
  name: 'pass',
  data(){
    return{
      click: true
    }
  },
  methods: {
    award(){
      if (this.click) {
        this.click = false
        this.$store.dispatch('GET_AWARD').then((res) => {
          if(res.data.status == 'failure'){
            this.$router.replace('/failure')
          }else if(res.data.status == 'success'){
            this.$router.replace('/success')
          }
        })
      }
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
  width: 4.984rem;
  position: absolute;
  left: 2.625rem;
  top: 6.328rem;
}
</style>