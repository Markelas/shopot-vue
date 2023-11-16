<template>
  <HeaderApp/>
  <div class="app_wrapper">
    <TextApp />
    <VideoApp/>
  </div>
</template>

<script>
import TextApp from './components/TextApp.vue'
import HeaderApp from "@/components/HeaderApp.vue";
import VideoApp from "@/components/VideoApp.vue";

export default {
  name: 'App',
  components: {
    VideoApp,
    HeaderApp,
    TextApp
  }
}
</script>

<style>

</style>
