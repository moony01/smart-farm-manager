import { createStore } from "vuex"

export const store = createStore({
  state() {
    return {
        placeholderText: '메세지를 입력하세요.'
    }
  },
  getters: {
    // placeholderText를 그대로 반환
    getPlaceholderText: state => state.placeholderText
  },
  mutations: {
    // placeholderText 업데이트
    updatePlaceholderText(state, newText) {
      state.placeholderText = newText
    }
  },
  actions: {
    // 서버에서 새로운 placeholderText를 가져와 업데이트할때
  }
});
