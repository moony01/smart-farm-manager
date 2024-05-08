<template>
<div class="content-wrapper">
  <div id="contChat" class="chat-content">
    <div class="chat-body">
      <div class="chat-body-char"></div>
      <div id="chatContainer" class="chat-body-chatting">
        <div class="chat-body-chatting-cont chat-body-chatting-ai">
          <figure>
            <img src="../assets/img/face-manager.png" class="ico-img">
          </figure>
          <p class="chat-body-chatting-ai-last-msg">
            <font-awesome-icon :icon="['fas', 'paper-plane']" />
          </p>
        </div>
      </div>
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
      this.displayBotLoading();
    },
    methods: {
      displayBotLoading: function() {
        // const chatContainer = document.getElementById("chatContainer");
        // const messageContent = document.createElement("div");
        // messageContent.classList.add("chat-body-chatting-cont", "chat-body-chatting-ai");

        // const messageElement = document.createElement("p");
        // messageElement.classList.add("chat-body-chatting-ai-last-msg");
        // messageElement.innerHTML = `<font-awesome-icon :icon="['fas', 'paper-plane']" />`

        // const imgElement = document.createElement("img");
        // imgElement.classList.add("ico-img");
        // imgElement.src = `../assets/img/face-manager.png`

        // const figureElement = document.createElement("figure");
        // figureElement.appendChild(imgElement);

        // messageContent.appendChild(figureElement);
        // messageContent.appendChild(messageElement);
        // chatContainer.appendChild(messageContent);
      },
      sendMessage: function() {
        console.log(this.newUserMessage);
        // 메시지를 보내는 로직
      },
    }
}
</script>

<style lang="scss" scoped>
  .chat-body-chatting {

    
  }
</style>