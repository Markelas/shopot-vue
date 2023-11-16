<template>
  <div class="text__block">
    <div>
      {{this.textStore.textInfoObj}}
    </div>
  </div>
</template>

<script>
import {useTextStore} from "@/store/store";

export default {
  name: 'TextApp',
  setup() {
    const textStore = useTextStore()
    return {
      textStore
    }
  },
  mounted() {
    this.textStore.getTextInfo()
    console.log('mounted')
  }
}
</script>

<style scoped>

</style>
