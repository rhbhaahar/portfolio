<template>
  <div class="locale-changer-wrapper">
    <span
      v-for="language in availableLanguages"
      :key="language"
      :class="{'active': language === $i18n.locale}"
      @click="setLanguage(language)">
      {{ languageNames[language] }}
    </span>
  </div>
</template>

<script>
import { languages } from '../utils/interfaces'

export default {
  name: 'LocaleChanger',
  data() {
    return {
      availableLanguages: [],
      languageNames: languages
    }
  },
  created() {
    this.availableLanguages = this.$i18n.availableLocales
  },
  methods: {
    setLanguage(language) {
      this.$i18n.locale = language
      localStorage.setItem('locale', language)
    }
  }
}
</script>

<style scoped lang="scss">
.locale-changer-wrapper {
  display: flex;
  background: #274472;
  padding: 8px 16px;
  color: aliceblue;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  span {
    margin-right: 8px;
    cursor: pointer;
    padding: 4px 12px;
    border-radius: 4px;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      background: rgba(240, 248, 255, 0.2);
    }

    &.active {
      background: aliceblue;
      color: #2c3e50;
      opacity: 1;
    }
  }
}
</style>
