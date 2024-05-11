<template>
  <div class="content-wrapper">
    <div id="contChat" class="chat-content">
      <div class="chat-body">
        <ChatCharacter />
        <ChatMessage />
        <ChatInput />
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
};
</script>
