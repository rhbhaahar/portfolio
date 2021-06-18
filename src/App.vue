<template>
    <HeaderNav msg="Header navigation"/>
  <div class="content-wrapper">
    <router-view />
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'

export default {
  name: 'App',
  components: {
    HeaderNav
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
