<template>
  <div class="bg">
    <img src="../assets/images/pic02.jpg" alt="">
    <div class="thumbnail"><img :src="thumbnail" alt=""></div>
    <div class="tag"><img :src="level" alt=""></div>
    <ul class="game">
      <li v-for="(l, i) in imgArr" :key="l.index" @click="move(l.index, i, $event)" :class="lic">
        <img :src="l.img" alt="">
        <div class="mask" v-if="selCls[i]"></div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'game',
  data() {
    return {
      initArr: [],
      succArr: [],
      selImg: [],
      selCls: [],
      num: 0,
      thumbnail: null,
      level: null,
      stage: 1,
      lic: 'lic'
    };
  },
  beforeMount() {
    this.stage = this.$store.state.stage
    if (this.stage == 1) {
      this.initArr = [1, 2, 3, 4]
      this.selCls = [0, 0, 0, 0]
      this.num = Math.ceil(Math.random() * 4)
    }else if (this.stage == 2) {
      this.initArr = [1, 2, 3, 4, 5, 6]
      this.selCls = [0, 0, 0, 0, 0, 0]
      this.num = Math.ceil(Math.random() * 4)
    }else if (this.stage == 3) {
      this.initArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      this.selCls = [0, 0, 0, 0, 0, 0, 0, 0, 0]
      this.num = Math.ceil(Math.random() * 4)
    }else if (this.stage == 4) {
      this.initArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      this.selCls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      this.num = Math.ceil(Math.random() * 4)
    }else if (this.stage == 5) {
      this.initArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
      this.selCls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      this.num = Math.ceil(Math.random() * 5)
    }

    this.lic = 'lic' + this.stage
    this.thumbnail = require('../assets/images/stage'+this.stage+'/'+this.num+'-1.jpg')
    this.level = require('../assets/images/stage'+this.stage+'/level.png')
    this.$store.commit('SET_NUM', this.num)

    this.initArr.sort(() => {
      return Math.random() - 0.5
    })
  },
  computed: {
    imgArr(){
      let arr = []
      this.initArr.map((i) => {
        arr.push({'img':require('../assets/images/stage'+this.stage+'/'+this.num+'-2-'+i+'.jpg'), 'index': i, 'sel': false});
      })
      return arr
    }
  },
  methods: {
    move(val, i, e){
      if (this.selImg.length == 0) {
        this.$set(this.selCls, i, 1)
        this.selImg.push([val, i])
      }else{
        this.$set(this.selCls, this.selImg[0][1], 0)
        this.$set(this.initArr, i, this.selImg[0][0])
        this.$set(this.initArr, this.selImg[0][1], val)
        this.selImg.splice(0, 1)

        const newArr = this.initArr.slice(0)
        const isPass = newArr.every((e, i) => e === i + 1)

        if (isPass) {
          if (this.stage < 5) {
            const nextStage = this.stage + 1
            this.$store.commit('SET_STAGE', nextStage)
            this.$router.replace('/tip')
          }else{
            this.$router.replace('/pass')
          }
        }
      }
    }
  }
};
</script>
<style scoped>
ul,li{padding: 0;margin: 0;list-style: none}
.bg{
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #023971;
}
.bg img{
  width: 100%;
}
.thumbnail{
  width: 2.734rem;
  position: absolute;
  left: .969rem;
  top: .61rem;
}
.timer{
  width: 3.406rem;
  position: absolute;
  right: 0;
  top: .969rem;
  text-align: left;
  font-size: .5rem;
  color: #fff
}
.tag{
  width: 4.719rem;
  position: absolute;
  right: .844rem;
  top: 1.456rem;
}
.game{
  width: 8.75rem;
  position: absolute;
  left: .625rem;
  top: 4.451rem;
}
.game li
{
  position: relative;
  overflow: hidden;
}
.lic1{
  width: 4.375rem;
  height: 4.375rem;
  float: left;
}
.lic2
{
  width: 2.917rem;
  height: 4.375rem;
  float: left;
}
.lic3
{
  width: 2.917rem;
  height: 2.917rem;
  float: left;
}
.lic4
{
  width: 2.917rem;
  height: 2.1875rem;
  float: left;
}
.lic5
{
  width: 2.1875rem;
  height: 2.1875rem;
  float: left;
}
.mask
{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.6);
  position: absolute;
  left: 0;
  top: 0;
}
</style>