module.exports = {
  devServer: {
    port: 3003
  },

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
