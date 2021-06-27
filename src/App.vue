<template>
  <router-view />
  <CircularMenu />
</template>

<script>
import CircularMenu from './components/CircularMenu'

export default {
  name: 'App',
  components: {
    CircularMenu
  }
}
</script>

<style lang="scss">
@import './styles/main.scss';

* {
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  height: 100%;
  background: $blue-gray;
}

#app {
  font-family: Alegreya, Helvetica, Arial, sans-serif;
  color: $deep-dark;
}
</style>
