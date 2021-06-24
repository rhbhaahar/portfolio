<template>
  <nav class="menu" :class="{'opened': opened}" v-click-outside="closeMenu">
    <label class="menu-open-button" @click="opened = !opened">
      <img src="../assets/leha.png">
    </label>

    <a href="mailto:rhbhaahar@gmail.com" class="menu-item google">
      <icon-base><icon-email /></icon-base>
    </a>
    <a href="https://wa.me/+79515127776" target="_blank" class="menu-item whatsapp">
      <icon-base><icon-whatsapp /></icon-base>
    </a>
    <a href="https://t.me/rhbhaahar" target="_blank" class="menu-item telegram">
      <icon-base><icon-telegram /></icon-base>
    </a>
    <a href="https://join.skype.com/invite/COgJRbirB4UE" target="_blank" class="menu-item skype">
      <icon-base><icon-skype /></icon-base>
    </a>
    <a href="https://github.com/rhbhaahar" target="_blank" class="menu-item github">
      <icon-base><icon-github /></icon-base>
    </a>
    <a href="https://www.upwork.com/freelancers/~018169ab6a7e53d11d" target="_blank" class="menu-item upwork">
      <icon-base><icon-upwork /></icon-base>
    </a>

    <div class="contact-me" v-if="!opened"> {{ $t('main.contactMe') }} </div>
  </nav>
</template>

<script>
import IconBase from './icons/IconBase.vue'
import IconEmail from './icons/IconEmail.vue'
import IconWhatsapp from './icons/IconWhatsapp.vue'
import IconTelegram from './icons/IconTelegram.vue'
import IconSkype from './icons/IconSkype.vue'
import IconGithub from './icons/IconGithub.vue'
import IconUpwork from './icons/IconUpwork.vue'
import clickOutside from '../directives/clickOutside'

export default {
  name: 'CircularMenu',
  components: {
    IconBase,
    IconEmail,
    IconWhatsapp,
    IconTelegram,
    IconSkype,
    IconGithub,
    IconUpwork
  },
  data() {
    return {
      opened: false
    }
  },
  methods: {
    closeMenu() {
      this.opened = false
    }
  },
  directives: {
    clickOutside
  }
}
</script>

<style scoped lang="scss">
a {
  color: inherit;
}

.menu-item,
.menu-open-button {
  background: #EEEEEE;
  border-radius: 100%;
  width: 80px;
  height: 80px;
  margin-left: -40px;
  position: absolute;
  color: #FFFFFF;
  text-align: center;
  line-height: 80px;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transition: -webkit-transform ease-out 200ms;
  transition: -webkit-transform ease-out 200ms;
  transition: transform ease-out 200ms;
  transition: transform ease-out 200ms, -webkit-transform ease-out 200ms;
}

.menu-item {
  width: 66px;
  height: 66px;
  line-height: 66px;
  margin-left: -33px;
  box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
  -webkit-transition-duration: 180ms;
  transition-duration: 180ms;

  &.google {
    background-color: #DB4437;
  }

  &.whatsapp {
    background-color: #25D366;
  }

  &.telegram {
    background-color: #0088cc;
  }

  &.skype {
    background-color: #00aff0;
  }

  &.github {
    background-color: #333;
  }

  &.upwork {
    background-color: #6fda44;
  }

  &:hover {
    text-shadow: none;
    background-color: #eee;
    color: #3290B1;
  }
}

.menu-open-button img {
  width: 100%;
  height: 100%;
}

.menu {
  position: absolute;
  bottom: 120px;
  right: 120px;
  width: 80px;
  height: 80px;
  text-align: center;
  box-sizing: border-box;
  font-size: 26px;
}

.menu-open-button {
  z-index: 2;
  -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -webkit-transition-duration: 400ms;
  transition-duration: 400ms;
  -webkit-transform: scale(2, 2) translate3d(0, 0, 0);
  transform: scale(2, 2) translate3d(0, 0, 0);
  cursor: pointer;

  &:hover {
    -webkit-transform: scale(2.2, 2.2) translate3d(0, 0, 0);
    transform: scale(2.2, 2.2) translate3d(0, 0, 0);
  }
}

.opened {
  .menu-open-button {
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
    -webkit-transition-duration: 200ms;
    transition-duration: 200ms;
    -webkit-transform: scale(1.4, 1.4) translate3d(0, 0, 0);
    transform: scale(1.4, 1.4) translate3d(0, 0, 0);
  }

  .menu-item {
    -webkit-transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
    transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
  }

  .menu-item:nth-child(2) {
    transition-duration: 180ms;
    -webkit-transition-duration: 180ms;
    -webkit-transform: translate3d(-2.91639px, -104.99997px, 0);
    transform: translate3d(-2.91639px, -104.99997px, 0);
  }

  .menu-item:nth-child(3) {
    transition-duration: 280ms;
    -webkit-transition-duration: 280ms;
    -webkit-transform: translate3d(98.9466px, -47.47586px, 0);
    transform: translate3d(98.9466px, -47.47586px, 0);
  }

  .menu-item:nth-child(4) {
    transition-duration: 380ms;
    -webkit-transition-duration: 380ms;
    -webkit-transform: translate3d(101.9466px, 60.47586px, 0);
    transform: translate3d(101.9466px, 60.47586px, 0);
  }

  .menu-item:nth-child(5) {
    transition-duration: 480ms;
    -webkit-transition-duration: 480ms;
    -webkit-transform: translate3d(0.08361px, 117.99997px, 0);
    transform: translate3d(0.08361px, 117.99997px, 0);
  }

  .menu-item:nth-child(6) {
    transition-duration: 580ms;
    -webkit-transition-duration: 580ms;
    -webkit-transform: translate3d(-100.86291px, 62.62064px, 0);
    transform: translate3d(-100.86291px, 62.62064px, 0);
  }

  .menu-item:nth-child(7) {
    transition-duration: 680ms;
    -webkit-transition-duration: 680ms;
    -webkit-transform: translate3d(-102.03006px, -55.33095px, 0);
    transform: translate3d(-102.03006px, -55.33095px, 0);
  }

  .menu-item:nth-child(8) {
    transition-duration: 780ms;
    -webkit-transition-duration: 780ms;
    -webkit-transform: translate3d(-0.25084px, -104.9997px, 0);
    transform: translate3d(-0.25084px, -104.9997px, 0);
  }
}

.google:hover {
  color: #DB4437;
}

.whatsapp:hover {
  color: #25D366;
}

.telegram:hover {
  color: #0088cc;
}

.skype:hover {
  color: #00aff0;
}

.github:hover {
  color: #333;
}

.upwork:hover {
  color: #6fda44;
}

.contact-me {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: -80px;
  width: 200px;
  animation: pulse 2s infinite;
  -webkit-animation: pulse 1s infinite alternate;
}

@keyframes pulse {
  to {
    font-size: 30px;
  }
}
@-webkit-keyframes pulse {
  to {
    font-size: 30px;
  }
}
</style>
