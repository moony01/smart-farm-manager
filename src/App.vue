<template>
  <MngHeader></MngHeader>
  <div class="content-wrapper">
    <MngContents></MngContents>
  </div>
</template>

<script>
import MngHeader from "./components/MngHeader.vue";
import MngContents from "./components/MngContents.vue";

export default {
  name: 'App',
  components: {
    MngHeader,
    MngContents,
  }
}
</script>

<style>
@import './assets/css/style.css';
@import './assets/css/reset.css';

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
