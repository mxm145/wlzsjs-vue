<template>
  <div class="bg">
    <img src="../assets/images/pic07.jpg" alt="">
    <div class="txt">活动时间：<br>2017年8月22日-2017年8月26日<br>参与方式：<br>关注“云南网”官方微信，点击微信下方菜单栏“知识竞赛”，即可参与活动。<br>活动规则：<br>进入游戏后，点击屏幕交换图片位置，完成拼图后开始学习网络安全知识，完成所有关卡即有机会抽取一定金额的学习鼓励金。</div>
    <div class="back"><router-link to="/"><img src="../assets/images/img03.png" alt=""></router-link></div>
  </div>
</template>
<script>
export default{
  name: 'guide',
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
.txt
{
  width: 7.8rem;
  height: 7.5625rem;
  overflow-y: auto;
  position: absolute;
  left: 1.1rem;
  top: 2.22rem;
  font-size: .5rem;
  line-height: 1.8;
  color: #3254ba
}
.back
{
  width: 2.547rem;
  position: absolute;
  left: .75rem;
  top: 11.594rem;
}
</style>