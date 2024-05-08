<template>
  <div class="send-area">
    <input
      id="messageInput"
      class="send-area-input"
      type="text"
      :placeholder='placeholderText'
    />
    <button id="send" class="send-area-btn">
      <font-awesome-icon :icon="['fas', 'paper-plane']" />
    </button>
  </div>
  
</template>

<script>
export default {
  name: "ChatInput",
  computed: {
    placeholderText() {
      return this.$store.state.placeholderText;
    }
  }
}
</script>

<style lang="scss" scoped>
.send-area {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 14px;

  &-input {
    width: calc(100% - 70px);
    height: 50px;
    border-radius: 10px;
    border: none;
    padding: 0 14px;
    box-sizing: border-box;
    outline: none;
    margin: 0 14px;
    color: #4a4a4a;
    background-color: #f9f9f9;
  }

  &-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    margin-right: 14px;
    background-color: #fefaec;

    &:hover {
      background-color: #856b0f;
      .fa-paper-plane {
        color: #f9f9f9;
      }
    }
  }

  .fa-paper-plane {
    color: #625772;
  }
}
</style>