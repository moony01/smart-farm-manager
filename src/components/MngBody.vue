<template>
  <div class="content-wrapper">
    <div id="contChat" class="chat-content">
      <div class="chat-body">
        <div class="chat-body-char"></div>
        <div id="chatContainer" class="chat-body-chatting">
          <div 
            v-for="(message, index) in messages"
            :key="index"
            class="chat-body-chatting-cont chat-body-chatting-ai"
          >
            <figure>
              <img src="../assets/img/face-manager.png" class="ico-img" />
            </figure>
            <p class="chat-body-chatting-ai-last-msg">
              <!-- <font-awesome-icon icon="fa-solid fa-spinner" spin-pulse /> -->
              <font-awesome-icon v-if="message.loading" :icon="['fas', 'spinner']" spin-pulse />
              {{ message.text }}
            </p>
          </div>
        </div>
        <ChatInput />
      </div>
    </div>
  </div>
</template>

<script>
import ChatInput from "./ChatInput";
export default {
  components: {
    ChatInput,
  },
  data: function () {
    return {
      messages: [],
    };
  },
  mounted() {
    this.addMessageWithTypingEffect("안녕하세요, 여기는 스마트팜 관리자입니다. 도움이 필요하신가요?");

    // 초기 로딩 메시지 추가
    // this.messages.push({
    //   text: '',
    //   loading: true
    // });

    // 3초 후에 실제 메시지로 교체
    // setTimeout(() => {
    //   this.messages[0] = {
    //     text: 'Hello, how can I help you today?',
    //     loading: false
    //   };
    // }, 2000)
  },
  methods: {
    addMessageWithTypingEffect(message) {
      const newMessage = { text: '', loading: false };
      this.messages.push(newMessage);
      let charIndex = 0;
      const messageIndex = this.messages.length - 1;

      const typeChar = () => {
        if (charIndex < message.length) {
          newMessage.text = this.messages[0].text
          const updatedText = newMessage.text + message[charIndex];
          this.messages[messageIndex] = { ...newMessage, text: updatedText };
          this.messages = [...this.messages]; // 배열 전체를 복사하여 갱신
          charIndex++;
          // requestAnimationFrame(() => {
          //   this.$nextTick(typeChar);
          // });
          setTimeout(() => {  // 200ms 후에 다음 문자 추가
            this.$nextTick(() => {
              requestAnimationFrame(typeChar);
            });
          }, 100);
        }
      };

      requestAnimationFrame(typeChar);
    }

    // 메시지 발송 클릭
    // sendMessage: function () {
    //   console.log(this.newUserMessage);
    //   // 메시지를 보내는 로직
    // },
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