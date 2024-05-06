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
  <div class="chat-body">
    <div class="chat-body-char">

    </div>

    <div id="chatContainer" class="chat-body-chatting">
      <!-- 채팅 내용 -->
      <div class="q-pa-md row justify-center">
        <div style="width: 100%">
          <q-chat-message
            name="me"
            avatar="https://cdn.quasar.dev/img/avatar4.jpg"
            :text="['hey, how are you?']"
            sent
          />
          <q-chat-message
            name="Jane"
            avatar="https://cdn.quasar.dev/img/avatar3.jpg"
            :text="[`doing fine, how r you?`]"
          />
          <q-chat-message
            name="me"
            avatar="https://cdn.quasar.dev/img/avatar4.jpg"
            :text="['hey, how are you?']"
            sent
          />
          <q-chat-message
            name="Jane"
            avatar="https://cdn.quasar.dev/img/avatar3.jpg"
            :text="[`doing fine, how r you?doing fine, how r you?doing fine, how r you?doing fine, how r you?doing fine, how r you?`]"
          />
          <q-chat-message
            name="me"
            avatar="https://cdn.quasar.dev/img/avatar4.jpg"
            :text="['hey, how are you?']"
            sent
          />
        </div>
      </div>
    </div>

    <div class="chat-body-input">
      <q-input 
        filled 
        class="chat-body-input-usr-message"
        v-model="ph" 
        placeholder="메시지를 입력하세요."
      />
      <q-btn
        padding="md"
        color="primary"
        round
        icon="eco"
      />
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
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
