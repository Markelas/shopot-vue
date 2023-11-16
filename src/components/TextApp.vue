<template>
  <div class="text__block" id="element">
    <div v-for="item in this.textStore.arrayBySpeakers" :key="item.id">
      <h3>Спикер {{item.activeSpeaker}}</h3>
      <table v-for="textInfo in item.textObjectsArray" :key="textInfo">
        <tr class="text__block__row">
          <td class="text__block__time">{{timeSpeaker(textInfo)}}</td>
          <one-text-by-speaker :key="textInfo+hackHtml" :textInfo="textInfo" :activeTime="activeTime"/>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import {useTextStore} from "@/store/store";
import OneTextBySpeaker from "@/components/OneTextBySpeaker.vue";

export default {
  name: 'TextApp',
  components: {OneTextBySpeaker},
  data() {
    return {
      textStore: useTextStore(),
      activeTextOnPage: '',
      hackHtml: '',
      activeTime: 0,
    }
  },
  async mounted() {
    await this.textStore.getTextInfo()
    this.currentTime
    setInterval(()=> {
        this.activeTime = document.getElementsByTagName('video')[0].currentTime
    },1000)
  },
  computed: {
  },
  methods: {
    timeSpeaker(textInfo) {
      const minutes = (Math.floor(textInfo.start / 60)).toString();
      const seconds = (textInfo.start % 60).toFixed(0).toString()
      return `${minutes.padStart(2,'0')}:${seconds.padStart(2,'0')}`
    },
  },
  watch: {

  },
}
</script>

<style scoped>

</style>
