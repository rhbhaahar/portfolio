<template>
  <div class="locale-changer-wrapper" v-click-outside="changeLocalesVisibility">
    <div @click="changeLocalesVisibility(!showLocale)" class="current-locale">{{ $i18n.locale }}</div>
    <transition name="fade">
      <div class="locales" v-if="showLocale">
        <span v-for="language in availableLanguages" :key="language" @click="setLanguage(language)">{{ languageNames[language] }}</span>
      </div>
    </transition>
  </div>
</template>

<script>
import clickOutside from '../directives/clickOutside'
import { languages } from '../utils/interfaces'

export default {
  name: 'LocaleChanger',
  data() {
    return {
      availableLanguages: [],
      showLocale: false,
      languageNames: languages
    }
  },
  created() {
    this.availableLanguages = this.$i18n.availableLocales
  },
  methods: {
    changeLocalesVisibility(bool) {
      this.showLocale = bool || false
    },
    setLanguage(language) {
      this.$i18n.locale = language
      localStorage.setItem('locale', language)
      this.changeLocalesVisibility()
    }
  },
  directives: {
    clickOutside
  }
}
</script>

<style scoped lang="scss">
.locale-changer-wrapper {
  position: relative;
  cursor: pointer;

  .current-locale {
    padding: 10px 20px;
  }

  .locales {
    display: flex;
    flex-direction: column;
    position: absolute;
    border: 1px solid aliceblue;
    background-color: #123;

    span {
      padding: 5px 10px;

      &:hover {
        background-color: rgba(0,0,0, .3);
      }
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
