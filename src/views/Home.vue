<template>
  <div class="main">
    <transition appear appear-active-class="fade-enter-active">
      <div class="center">
        <img src="../assets/gus.png">
        <div class="content">
          <p class="header">Hello stranger and welcome to my place.</p>
          <div>My name is Alexei, I'm a senior full-stack web developer and simply a nice guy. I like coding as much as shredding my guitar out.</div>
          <div class="achievements-wrapper">
            <div class="achievement">
              <Coding />
              <div class="title">7+ years of commercial development</div>
            </div>
            <div class="achievement">
              <Projects />
              <div class="title">More than 10 successfull projects</div>
            </div>
            <div class="achievement">
              <JSIcon />
              <div class="title">Javascript proficiency</div>
            </div>
          </div>
          <div class="next">Explore</div>
        </div>
      </div>
    </transition>
    <div class="locale">
      <LocaleChanger />
    </div>
  </div>
  <div class="second-block">
  </div>
</template>

<script>
import LocaleChanger from '../components/LocaleChanger'
import Coding from '../components/icons/Coding'
import Projects from '../components/icons/Projects'
import JSIcon from '../components/icons/JSIcon'

export default {
  name: 'Home',
  components: {
    LocaleChanger,
    Coding,
    Projects,
    JSIcon
  }
}
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;

  .locale {
    position: absolute;
    right: 64px;
    top: 32px;
  }

  .center {
    width: 800px;
    height: 400px;
    display: flex;
    background: #2c3e50;;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

    img {
      height: 100%;
    }

    .content {
      width: 100%;
      color: aliceblue;
      padding: 20px;
      position: relative;

      .header {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 16px;
      }

      .achievements-wrapper {
        margin-top: 32px;
        display: flex;
        justify-content: space-between;
        gap: 10px;

        .achievement {
          flex: 1 1 33.33%;
          text-align: center;

          svg {
            width: 100px;
            height: 100px;
          }

          .title {
            margin-top: 4px;
          }

          &:last-child {
            margin-right: 0;
          }
        }
      }

      .next {
        position: absolute;
        padding: 20px 0;
        bottom: 0;
        width: 100%;
        left: 0;
        text-align: center;
        cursor: pointer;
        background: rgba(255,255,255,.1);
      }
    }
  }
}

.second-block {
  width: 100%;
  height: 400px;
  background: purple;
}

.fade-enter-active {
  -webkit-animation: go 1.5s;
  animation: go 1.5s;
}

@keyframes go {
  from {
    top: -50%;
  }
  to {
    top: 50%;
  }
}
</style>
