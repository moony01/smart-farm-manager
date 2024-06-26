<template>
  <div id="chatContainer" class="chat-body-chatting">
    <div
      v-for="(message, index) in combinedMessages"
      :key="index"
      :class="{
        'chat-body-chatting-cont': true,
        'chat-body-chatting-ai': message.type === 'bot',
        'chat-body-chatting-usr': message.type === 'usr',
      }"
    >
      <figure v-if="message.type === 'bot'">
        <img src="@/assets/img/face-manager.png" class="ico-img" />
      </figure>
      <p class="chat-body-chatting-ai-last-msg">
        <font-awesome-icon
          v-if="message.loading"
          :icon="['fas', 'spinner']"
          spin-pulse
        />
        {{ message.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatInput",

  data() {
    return {
      botMessages: [], // 봇이 보낸 메시지들을 저장하는 배열
      usrMessages: [], // 사용자가 입력한 메시지들을 저장하는 배열
    };
  },
  computed: {
    combinedMessages() {
      let combined = [];
      const maxLength = Math.max(this.botMessages.length, this.usrMessages.length);
      for (let i = 0; i < maxLength; i++) {
        if(this.botMessages[i])
          combined.push({ ...this.botMessages[i], type: 'bot' });
        if(this.usrMessages[i])
          combined.push({ ...this.usrMessages[i], type: 'usr' });
      }
      return combined;
    }
  },
  mounted() {
    this.botFirstMessageProcessing("안녕하세요, 여기는 스마트팜 관리자입니다. 도움이 필요하신가요?");
  },
  methods: {
    botFirstMessageProcessing(message) {
      const newMessage = { text: '', loading: false };
      this.botMessages.push(newMessage);

      const messageIndex = this.botMessages.length - 1;
      let charIndex = 0;

      const typeChar = () => {
        if (charIndex < message.length) {
          newMessage.text = this.botMessages[0].text
          const updatedText = newMessage.text + message[charIndex];
          this.botMessages[messageIndex] = { ...newMessage, text: updatedText };
          this.botMessages = [...this.botMessages]; // 배열 전체를 복사하여 갱신
          charIndex++;
          setTimeout(() => {  // 200ms 후에 다음 문자 추가
            this.$nextTick(() => {
              requestAnimationFrame(typeChar);
            });
          }, 100);
        }
      };

      requestAnimationFrame(typeChar);
    },
    displayUsrMessage(message) {
      const newMessage = { text: message, loading: false };
      this.usrMessages.push(newMessage);
    }
  },
};
</script>

<style lang="scss" scoped>
.chat-body-chatting {
  &-ai {
    justify-content: flex-start;

    & p {
      background-color: #f9f9f9;

      & a {
        color: #0508a5;
        font-family: "NanumBarunGothicBold";
        font-size: 1em;
        text-decoration: underline;
        margin-left: 14px;
        cursor: pointer;
      }
    }
  }

  &-usr {
    justify-content: flex-end;

    & p {
      background-color: #fefaec;
    }
  }

  &-cont > * {
    border-radius: 10px;
  }

  & figure {
    background-color: #f9f9f9;
    margin-right: 14px;
    min-width: 50px;
    height: 50px;
    overflow: hidden;
  }

  & p {
    padding: 10px;
    height: 100%;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 80%;
    min-height: 30px;
    min-width: 30px;
    word-break: break-all;
  }
}
</style>