module.exports = {
  runtimeCompiler: true,
  publicPath: '/admin/',
  devServer: {
    disableHostCheck: true,
    port: 3002,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',//代理地址，这里设置的地址会代替axios中设置的baseURL
        changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
        ws: true, // proxy websockets
        //pathRewrite方法重写url
        pathRewrite: {
          '^/api': '/'
        }

      }
    }
  }
}