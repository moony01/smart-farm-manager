<template>
  <header class="header">
    <a href="#" class="header-icon" id="headerIcon"></a>
    <a v-on:click="fnMovePage('main')" class="header-logo"
      ><img src="../assets/img/logo-icon.png" alt="psytalk로고"
    /></a>
    <nav class="header-menu">
      <a
        v-for="item in menuInfo"
        :key="item.page"
        @click="fnMovePage(item.page)"
        >{{ item.name }}
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  data: function () {
    return {
      menuInfo: [
        { name: "블로그", page: "blog" },
        { name: "케이팝 얼굴상 테스트", page: "face" },
        { name: "MBTI AI CHAT", page: "mbti" },
      ],
    };
  },
  methods: {
    // 메뉴 페이지 이동
    fnMovePage: function (page) {
      if (page == "blog") {
        location.href = "https://moony01.com/";
      } else if (page == "face") {
        location.href = "https://moony01.com/kpopface/";
      } else if (page == "mbti") {
        location.href = "https://mbtichat.info/";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  left: 0;
  right: 0;
  height: 66px;
  line-height: 66px;
  color: #625772;
  background-color: #f9eed7;
  font-size: 1em;
  z-index: 1;

  /* LOGO */
  &-logo {
    font-weight: 700;
    padding: 0 25px;
    float: left;
    width: 90px;
    cursor: pointer;
    img {
      padding: 13px 0;
    }
  }

  /* MENU */
  &-menu {
    float: left;

    a {
      padding: 0 10px;
      text-decoration: none;
      color: inherit;
      cursor: pointer;
      &:hover {
        color: #c5cae9;
      }
    }
  }
}
</style>