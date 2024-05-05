<template>
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
            stamp="7 minutes ago"
          />
          <q-chat-message
            name="Jane"
            avatar="https://cdn.quasar.dev/img/avatar3.jpg"
            :text="[`doing fine, how r you?`]"
            stamp="4 minutes ago"
          />
          <q-chat-message
            name="me"
            avatar="https://cdn.quasar.dev/img/avatar4.jpg"
            :text="['hey, how are you?']"
            sent
            stamp="7 minutes ago"
          />
          <q-chat-message
            name="Jane"
            avatar="https://cdn.quasar.dev/img/avatar3.jpg"
            :text="[`doing fine, how r you?`]"
            stamp="4 minutes ago"
          />
          <q-chat-message
            name="me"
            avatar="https://cdn.quasar.dev/img/avatar4.jpg"
            :text="['hey, how are you?']"
            sent
            stamp="7 minutes ago"
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
