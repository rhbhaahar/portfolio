<template>
  <Header />
  <div class="content-wrapper body-content-wrapper">
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  height: 100%;
  background-color: #f1f2f9;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;

  &.body-content-wrapper {
    min-height: calc(100% - 50px);
    box-sizing: border-box;
    padding-top: 20px;
    background-color: #fff;
  }
}
</style>
