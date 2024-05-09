const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 브라우저 디버깅을 위한 웹팩 설정
  configureWebpack: {
    devtool: 'source-map'
  },
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/smart-farm-manager/'
    : '/'
})
