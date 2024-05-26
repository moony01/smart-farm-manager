<template>
  <div class="content-wrapper">
    <div id="contChat" class="chat-content">
      <div class="chat-body">
        <ChatCharacter />
        <ChatMessage :messages="messages" />
        <ChatInput @message-sent="handleMessage" />
      </div>
    </div>
  </div>
</template>

<script>
import ChatCharacter from "./ChatCharacter";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

export default {
  name: "MngBody",
  components: {
    ChatCharacter,
    ChatInput,
    ChatMessage
  },
  data() {
    return {
      botMessages: [],
      usrMessages: [],
    };
  },
  methods: {
    handleMessage(newMessage) {
      this.usrMessages.push({ text: newMessage, type: 'usr' })
    }
  }
};
</script>
