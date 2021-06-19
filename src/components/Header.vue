<template>
  <div class="header-wrapper">
    <div class="content-wrapper">
      <div class="menu">
        <router-link to="/">{{ $t('headerNav.main') }}</router-link>
        <router-link to="/portfolio">{{ $t('headerNav.portfolio') }}</router-link>
        <router-link to="/contacts">{{ $t('headerNav.contacts') }}</router-link>
      </div>
      <LocaleChanger />
    </div>
  </div>
</template>

<script>
import LocaleChanger from './LocaleChanger'

export default {
  name: 'Header',
  components: {
    LocaleChanger
  }
}
</script>

<style scoped lang="scss">
.header-wrapper {
  height: 50px;
  background-color: #123;
  color: aliceblue;

  .content-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

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
          background-color: rgba(0,0,0, .3);
        }
      }
    }
  }
}

</style>
