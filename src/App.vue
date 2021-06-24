<template>
  <!-- <div class="content-wrapper body-content-wrapper">
    <router-view />
  </div> -->
  <div class="main">

  </div>
  <div class="second-block">

  </div>
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
* {
  margin: 0;
  padding: 0;
}

html,
body,
#app {
  height: 100%;
  background: url('./assets/background.png') repeat;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  display: flex;
  align-items: center;
}

.content-wrapper {
  margin: 0 auto;

  &.body-content-wrapper {
    box-sizing: border-box;
    padding-top: 20px;
    width: calc(100% - 240px);
    height: 75%;
    // border-radius: 20px;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
    background: #2c3e50;
  }
}

.main {
  width: 100%;
  height: 100%;
  background: red;
}

.second-block {
  width: 100%;
  height: 400px;
  background: purple;
}
</style>
