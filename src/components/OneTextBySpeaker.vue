<template>
  <td class="text__block__text" @click="findTimeOnVideo(textInfo.start)">{{textInfo.text}}</td>
</template>

<script>
export default {
  props:['textInfo', 'activeTime'],
  methods:{
    findTimeOnVideo(time) {
      document.getElementsByTagName('video')[0].currentTime = time
    },
  },
  computed:{
    // activeText(){
    //   // // console.log(this.textInfo.start + this.textInfo.duration)
    //   // // console.log(this.activeTime <= this.textInfo.start + this.textInfo.duration)
    //   // console.log((this.activeTime).toFixed(2))
    //   // console.log((this.textInfo.start).toFixed(2))
    //   // console.log(this.activeTime === this.textInfo.start + this.textInfo.duration+1)
    //   // return this.activeTime === Math.round(this.textInfo.start + this.textInfo.duration)
    // }
  }
}
</script>

<style scoped>

</style>
