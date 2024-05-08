import { createStore } from "vuex"

export const store = createStore({
  state() {
    return {
        placeholderText: '메세지를 입력하세요.'
    }
  }
});
