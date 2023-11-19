<template>
    <div class="video__box">
    <video src="https://file.notion.so/f/f/9e6aa08e-de3b-4fa2-a7ab-a0ac08e1ddea/43e05f39-570a-41d2-84dc-692c2d68b83e/video1687347191.mp4?id=fa4f026c-95ab-4170-a481-55dbcddfb059&table=block&spaceId=9e6aa08e-de3b-4fa2-a7ab-a0ac08e1ddea&expirationTimestamp=1700510400000&signature=9jFagzqyMl9jyujr147uGjnVHUBJS7Tw8d5R8op8BK0" width="390" class="video__player" controls @click="textStore.isToggleVideo"></video>
  </div>
</template>

<script>
import {useTextStore} from "@/store/store";
export default {
  data() {
    return {
      textStore: useTextStore(),
      videoEl: document.getElementsByTagName('video'),
      video : '',
      display: ''
    }
  },
  mounted() {

  },
  computed: {

  },
  methods: {

  }
}


</script>


<style scoped>

</style>
