<template>
<div class="chat-body">
    <div class="chat-body-char">

    </div>

    <div id="chatContainer" class="chat-body-chatting">
          <!-- 스피너 표시 -->
          <q-spinner-orbit v-if="showSpinner" color="blue" />

          <!-- 채팅 내용, 스피너가 숨겨진 후 표시 -->
          <q-chat-message
            v-for="(message, index) in messages"
            :key="index"
            :name="message.name"
            :avatar="message.avatar"
            :text="message.text"
            :sent="message.sent"
          />
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
</template>

<script>
    export default {
        data: function() {
          return {
            newUserMessage: "",
            messages: [],
            showSpinner: true, // 스피너 표시 상태 초기화
          }
        },
        mounted() {
          // DOM이 준비된 후 실행되어야 하는 로직
          this.initializeComponent();
        },
        methods: {
          initializeComponent: function() {
            // 스피너를 3초간 표시한 후 메시지 로딩
            setTimeout(() => {
              this.showSpinner = false; // 스피너 숨기기
              this.messages.push({
                name: "Jane",
                avatar: "https://cdn.quasar.dev/img/avatar3.jpg",
                text: ["doing fine, how r you?"],
                sent: false
              })
            }, 3000);
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