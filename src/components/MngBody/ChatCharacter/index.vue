<template>
  <div class="chat-body-char"></div>
</template>

<script>
export default {
  name: "ChatCharacter",
};
</script>

<style lang="scss" scoped>
.chat-body-char {
  width: 100%;
  height: 250px;
  margin: 14px 0;
  background-image: url(@/assets/img/smart-farm-manager.png);
  background-size: contain;
  background-color: #f9f9f9;
  background-repeat: no-repeat;
  background-position: 50% 10%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #625772;
}
</style>