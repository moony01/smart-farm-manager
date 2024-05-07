<template>
<div id="contChat" class="chat-content">
  <div class="chat-body">
    <div class="chat-body-char">
    </div>

    <div id="chatContainer" class="chat-body-chatting">
    </div>

    <div class="chat-body-input">
      <q-input 
        filled 
        class="chat-body-input-usr-message"
        v-model="newUserMessage" 
        placeholder="메시지를 입력하세요."
      />
      <q-btn
        padding="md"
        color="primary"
        round
        icon="eco"
        v-on:click="sendMessage"
      />
    </div>
  </div>
</div>

</template>

<script>
    export default {
        data: function() {
          return {
            newUserMessage: "",
            messages: [],
          }
        },
        mounted() {
          // DOM이 준비된 후 실행되어야 하는 로직
          this.initializeComponent();
        },
        methods: {
          initializeComponent: function() {

          },
          sendMessage: function() {
            console.log(this.newUserMessage);
            // 메시지를 보내는 로직
          },
        }
    }
</script>

<style scoped>

</style>