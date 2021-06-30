module.exports = {
  devServer: {
    port: 3003
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  },

  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/variables.scss";
        `
      }
    }
  }
}
