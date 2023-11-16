<template>
  <td class="text__block__text" @click="findTimeOnVideo(textInfo.start)" :class="{'text__block__text--active': activeText }">{{textInfo.text}}</td>
</template>

<script>
export default {
  props:['textInfo', 'activeTime'],
  methods:{
    findTimeOnVideo(time) { //При клике, переходим по времени, с которого начинается текст
      document.getElementsByTagName('video')[0].currentTime = Math.floor(time+1)
    },
  },
  computed:{
    activeText(){ //Подсвечиваем активный текст, если он находится в пределах нужного времени
      return (this.activeTime > this.textInfo.start) && (this.activeTime<(this.textInfo.start + this.textInfo.duration))
    }
  }
}
</script>

<style scoped>

</style>
