const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/my-project/' : '/',
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://pvp.qq.com',
        //是否允许跨域
        changeOrigin: true,
        pathRewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
