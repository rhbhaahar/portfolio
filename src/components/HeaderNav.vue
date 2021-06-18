<template>
  <div class="header-wrapper">
    <div class="content-wrapper">
      <div class="menu">
        <router-link to="/about">ABOUT</router-link>
        <router-link to="/home">HOME</router-link>
        <router-link to="/">MAIN</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderNav',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
.header-wrapper {
  height: 50px;
  background-color: #123;
  color: aliceblue;
}

.menu {
  height: 50px;
  display: flex;
  align-items: center;

  a {
    color: aliceblue;
    text-decoration: none;
    padding: 10px 20px;

    &.router-link-active {
      color: red;
    }

    &:hover {
      background-color: rgba(0,0,0, .1);
    }
  }
}
</style>
