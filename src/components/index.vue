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
  name: 'index',
  mounted(){
    const wx_tk= sessionStorage.getItem("wx_tk");
    axios.get('/new/index.php?nova_p=QWNIMFRZbmsxZWlFd0hBa3R0SlY3RDRuZG15cTFhTXNHc0p0T0x3SXpoQT0@', {params: {wx_tk: wx_tk}}).then((res) => {
      if(res.data.subscribe == 0){
        layer.open({
          content: '<img src="static/ewm.jpg" style="max-width:100%">温馨提示：开始游戏前请先识别二维码关注“云南网”微信公众号，以便抽到的“学习鼓励金”能及时通过公众号后台发送到您账户。',
          shadeClose: false
        });
      }else{
        this.$store.commit('SET_OPENID', res.data.openid)
      }
    })
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