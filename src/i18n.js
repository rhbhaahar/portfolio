import { createI18n } from 'vue-i18n/index'

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */
function loadLocaleMessages() {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key).default
    }
  })
  return messages
}

const getCurrentLanguage = () => {
  const lang = localStorage.getItem('locale')

  return lang || 'en'
}

export default createI18n({
  legacy: true,
  locale: getCurrentLanguage(),
  globalInjection: true,
  fallbackLocale: 'en',
  messages: loadLocaleMessages(),
  pluralizationRules: {
    /**
     * @param choice {number} a choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
     * @param choicesLength {number} an overall amount of available choices
     * @returns a final choice index to select plural word by
     */
    'ru': function(choice, choicesLength) {
      // this === VueI18n instance, so the locale property also exists here

      if (choice === 0) {
        return 0;
      }

      const teen = choice > 10 && choice < 20;
      const endsWithOne = choice % 10 === 1;

      if (choicesLength < 4) {
        return (!teen && endsWithOne) ? 1 : 2;
      }
      if (!teen && endsWithOne) {
        return 1;
      }
      if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
        return 2;
      }

      return (choicesLength < 4) ? 2 : 3;
    }
  }
})
