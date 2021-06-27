module.exports = {
  // 基本路径
  publicPath: './',
  productionSourceMap: false,
   chainWebpack: config => {

    // 移除prefetch插件，避免加载多余的资源
    config.plugins.delete('prefetch')
    //图片压缩
    const imagesRule = config.module.rule('images')
        imagesRule
            .use('image-webpack-loader')
            .loader('image-webpack-loader')
            .options({
                bypassOnDebug: true
            })
            .end()
  }

}
