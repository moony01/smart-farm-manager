<template>
  <MngHeader />
  <MngBody />
</template>

<script>
import MngHeader from "./components/MngHeader.vue";
import MngBody from "./components/MngBody";

export default {
  name: 'App',
  components: {
    MngHeader,
    MngBody,
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
