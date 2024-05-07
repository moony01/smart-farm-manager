<template>
<div class="content-wrapper">
  <div id="contChat" class="chat-content">
    <div class="chat-body">
      <div class="chat-body-char"></div>
      <div id="chatContainer" class="chat-body-chatting"></div>
      <ChatInput />
    </div>
  </div>
</div>
</template>

<script>
import ChatInput from './ChatInput'
export default {
    components: {
      ChatInput
    },
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