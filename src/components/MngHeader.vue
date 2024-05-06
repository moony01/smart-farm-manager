<template>
  <q-layout view="lHh lpr lFf" container style="height: 98px" class="shadow-2 rounded-borders">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat round dense icon="menu" class="q-mr-sm" />
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar>

        <q-toolbar-title>Quasar Framework</q-toolbar-title>

        <q-btn flat round dense icon="whatshot" />
      </q-toolbar>

      <q-tabs v-model="tab">
        <q-tab name="images" label="Images" />
        <q-tab name="videos" label="Videos" />
        <q-tab name="articles" label="Articles" />
      </q-tabs>
    </q-header>
  </q-layout>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>