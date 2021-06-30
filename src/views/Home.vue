<template>
  <div class="main">
    <transition appear appear-active-class="fade-enter-active">
      <div class="center">
        <img src="../assets/gus.png">
        <div class="content">
          <p class="header">{{ $t('main.header') }}</p>
          <div>{{ $t('main.selfDescription') }}</div>
          <div class="achievements-wrapper">
            <div class="achievement">
              <Coding />
              <div class="title">{{ $t('main.devExperience') }}</div>
            </div>
            <div class="achievement">
              <Projects />
              <div class="title">{{ $t('main.projectExperience') }}</div>
            </div>
            <div class="achievement">
              <JSIcon />
              <div class="title">{{ $t('main.jsExperience') }}</div>
            </div>
          </div>
          <div class="next" @click="goToSkills">{{ $t('main.knowMe') }}</div>
        </div>
      </div>
    </transition>
    <div class="locale">
      <LocaleChanger />
    </div>
  </div>
  <div class="skills" ref="skills">
    <div class="section-title">{{ $t('skills.title') }}</div>
    <div class="section-wrapper">
      <div class="block">
        <div class="header">{{ $t('skills.frontend') }}</div>
        <div class="content">
          <Skill imageSource="skills/html5.png" title="HTML" :backText="$tc('skills.experience', 9)"/>
          <Skill imageSource="skills/css3.png" title="CSS" :backText="$tc('skills.experience', 9)"/>
          <Skill imageSource="skills/javascript.png" title="Javascript" :backText="$tc('skills.experience', 8)"/>
          <Skill imageSource="skills/vuejs.png" title="Vue.js" :favourite="true" :backText="`${$tc('skills.experience', 3)}, ${$t('skills.favouriteFramework')}`"/>
          <Skill imageSource="skills/angular.png" title="Angular" :backText="$tc('skills.experience', 3)"/>
          <Skill imageSource="skills/react.png" title="React" :backText="$tc('skills.experience', 1)"/>
        </div>
      </div>
      <div class="block">
        <div class="header">{{ $t('skills.backend') }}</div>
        <div class="content">
          <Skill imageSource="skills/nodejs.png" title="Node.js" :backText="$tc('skills.experience', 5)"/>
          <Skill imageSource="skills/python.png" title="Python" :backText="$tc('skills.experience', 4)"/>
          <Skill imageSource="skills/express.svg" title="Express" :favourite="true" :backText="`${$tc('skills.experience', 4)}, ${$t('skills.favouriteFramework')}`"/>
          <Skill imageSource="skills/nestjs.svg" title="Nest.js" :backText="$tc('skills.experience', 1)"/>
          <Skill imageSource="skills/django.png" title="Django" :backText="$tc('skills.experience', 3)"/>
          <Skill imageSource="skills/flask.png" title="Flask" :backText="$tc('skills.experience', 1)"/>
        </div>
      </div>
      <div class="block">
        <div class="header">{{ $t('skills.databases') }}</div>
        <div class="content">
          <Skill imageSource="skills/postgresql.png" title="Postgresql" :favourite="true" :backText="`${$tc('skills.experience', 3)}, ${$t('skills.favouriteDb')}`"/>
          <Skill imageSource="skills/mysql.png" title="Mysql" :backText="$tc('skills.experience', 2)"/>
          <Skill imageSource="skills/mongodb.svg" title="MongoDB" :backText="$tc('skills.experience', 1)"/>
          <Skill imageSource="skills/firebase.svg" title="Firebase" :backText="$tc('skills.experience', 1)"/>
        </div>
      </div>
      <div class="block">
        <div class="header">{{ $t('skills.other') }}</div>
        <div class="content">
          <Skill imageSource="skills/git.png" title="Git" :favourite="true" :backText="$t('skills.oneLove')"/>
          <Skill imageSource="skills/nginx.svg" title="Nginx" :backText="$t('skills.moreThanApache')"/>
          <Skill imageSource="skills/aws.png" title="AWS" :backText="$t('skills.aws')"/>
          <Skill imageSource="skills/stripe.png" title="Stripe" :backText="$tc('skills.experience', 1)"/>
        </div>
      </div>
    </div>
  </div>
  <div class="portfolio">
    <div class="section-title">{{ $t('projects.title') }}</div>
    <div class="section-wrapper">
      <Project
        v-for="project in projects"
        :link="project.link"
        :title="project.title"
        :imageSource="project.imageSource"
        :theme="project.theme"
        :tech="project.tech"
        :timeline="project.timeline"
        :key="project.title"
      />
    </div>
  </div>
  <div class="footer">
    <div>dev23lx@gmail.com</div>
    <div>Copyright &copy; Alexei Merzliakov</div>
  </div>
</template>

<script>
import LocaleChanger from '../components/LocaleChanger'
import Coding from '../components/icons/Coding'
import Projects from '../components/icons/Projects'
import JSIcon from '../components/icons/JSIcon'
import Skill from '../components/Skill'
import Project from '../components/Project'
import { projects } from '../utils/content'

export default {
  name: 'Home',
  components: {
    LocaleChanger,
    Coding,
    Projects,
    JSIcon,
    Skill,
    Project
  },
  data() {
    return {
      projects
    }
  },
  methods: {
    goToSkills() {
      const element = this.$refs.skills

      element.scrollIntoView({behavior: 'smooth'})
    }
  }
}
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  background: url('../assets/backGray.jpg') $baby-blue;
  background-position: center;
  background-size: cover;
  background-blend-mode: multiply;

  .locale {
    position: absolute;
    right: 64px;
    top: 32px;
  }

  .center {
    width: 800px;
    height: 400px;
    display: flex;
    background: $dark-blue;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: $common-box-shadow;

    img {
      height: 100%;
    }

    .content {
      width: 100%;
      color: $light-white;
      padding: 20px;
      position: relative;

      .header {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 16px;
      }

      .achievements-wrapper {
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
        gap: 10px;

        .achievement {
          flex: 1 1 33.33%;
          text-align: center;

          svg {
            width: 100px;
            height: 100px;
            color: #000;
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

        &:hover {
          background: rgba(255,255,255,.2);
        }
      }
    }
  }
}

.skills {
  background: $midnight-blue;
  color: $light-white;
  padding: 40px 80px;

  .section-wrapper {
    .block {
      padding: 20px 0;
      border-bottom: 1px solid $deep-dark;

      &:last-child {
        border-bottom: none;
      }

      .header {
        margin-bottom: 16px;
        font-size: 20px;
        font-weight: bold;
      }

      .content {
        display: flex;
        justify-content: center;

        .skill-box {
          margin-right: 12px;
        }
      }
    }
  }
}

.portfolio {
  background: $baby-blue;
  color: $deep-dark;
  padding: 40px 80px;

  .section-wrapper {
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 32px 12px;
    justify-content: center;

    .project-wrapper {
      flex: 1 1 30%;
      max-width: 30%;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.footer {
  padding: 40px;
  background: $deep-dark;
  color: $baby-blue;
  text-align: center;
}

.section-title {
  font-size: 30px;
  text-align: center;
}

.section-wrapper {
  width: 800px;
  margin: 0 auto;
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

@media(max-width: 900px) {
  .main {
    .locale {
      right: 12px;
      top: 4px;
    }
    .center {
      position: inherit;
      width: 100%;
      height: auto;
      -webkit-animation: none;
      -moz-animation: none;
      -o-animation: none;
      animation: none;

      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      img {
        display: none;
      }
    }
  }

  .skills {
    padding: 20px 32px;

    .section-wrapper {
      width: 100%;

      .block {
        .content {
          flex-wrap: wrap;
          gap: 12px 0;
        }
      }
    }
  }

  .portfolio {
    padding: 20px 32px;

    .section-wrapper {
      width: 100%;

      .project-wrapper {
        min-width: 180px;
        flex: auto;
      }
    }
  }
}

@media(max-width: 460px) {
  .portfolio {
    .section-wrapper {
      .project-wrapper {
        min-width: 100%;
      }
    }
  }
}
</style>
