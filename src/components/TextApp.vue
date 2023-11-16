<template>
  <div class="text__block" id="element">
    <div v-for="item in this.textStore.arrayBySpeakers" :key="item.id">
      <h3>Спикер {{item.activeSpeaker}}</h3>
      <table v-for="textInfo in item.textObjectsArray" :key="textInfo">
        <tr class="text__block__row">
          <td class="text__block__time">{{timeSpeaker(textInfo)}}</td>
          <td class="text__block__text" @click="findTimeOnVideo(textInfo.start)">{{textInfo.text}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import {useTextStore} from "@/store/store";

export default {
  name: 'TextApp',
  data() {
    return {
      textStore: useTextStore(),
    }
  },
  async mounted() {
    await this.textStore.getTextInfo()
    console.log('mounted')
  },
  computed: {
  },
  methods: {
    timeSpeaker(textInfo) {
      const minutes = (Math.floor(textInfo.start / 60)).toString();
      const seconds = (textInfo.start % 60).toFixed(0).toString()
      return `${minutes.padStart(2,'0')}:${seconds.padStart(2,'0')}`
    },
    findTimeOnVideo(time) {
      document.getElementsByTagName('video')[0].currentTime = time
    }
  }
}
</script>

<style scoped>

</style>
