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
          <div class="next" @click="goToSkills">Explore</div>
        </div>
      </div>
    </transition>
    <div class="locale">
      <LocaleChanger />
    </div>
  </div>
  <div class="skills" ref="skills">
    <div class="title">Skills</div>
    <div class="wrapper">
      <div class="block">
        <div class="header">Frontend</div>
        <div class="content">
          <Skill imageSource="skills/html5.png" title="HTML" backText="9 years experience"/>
          <Skill imageSource="skills/css3.png" title="CSS" backText="9 years experience"/>
          <Skill imageSource="skills/javascript.png" title="Javascript" backText="8 years experience"/>
          <Skill imageSource="skills/vuejs.png" title="Vue.js" :favourite="true" backText="3 years experience, favourite framework"/>
          <Skill imageSource="skills/angular.png" title="Angular" backText="3 years experience"/>
          <Skill imageSource="skills/react.png" title="React" backText="1 year experience"/>
        </div>
      </div>
      <div class="block">
        <div class="header">Backend</div>
        <div class="content">
          <Skill imageSource="skills/nodejs.png" title="Node.js" backText="5 years experience"/>
          <Skill imageSource="skills/python.png" title="Python" backText="4 years experience"/>
          <Skill imageSource="skills/express.svg" title="Express" :favourite="true" backText="4 years experience, favourite framework"/>
          <Skill imageSource="skills/nestjs.svg" title="Nest.js" backText="1 year experience"/>
          <Skill imageSource="skills/django.png" title="Django" backText="3 years experience"/>
          <Skill imageSource="skills/flask.png" title="Flask" backText="1 year experience"/>
        </div>
      </div>
      <div class="block">
        <div class="header">Databases</div>
        <div class="content">
          <Skill imageSource="skills/postgresql.png" title="Postgresql" :favourite="true" backText="3 years experience, favourite db"/>
          <Skill imageSource="skills/mysql.png" title="Mysql" backText="2 years experience"/>
          <Skill imageSource="skills/mongodb.svg" title="MongoDB" backText="1 year experience"/>
          <Skill imageSource="skills/firebase.svg" title="Firebase" backText="1 year experience"/>
        </div>
      </div>
      <div class="block">
        <div class="header">Other</div>
        <div class="content">
          <Skill imageSource="skills/git.png" title="Git" :favourite="true" backText="one love"/>
          <Skill imageSource="skills/nginx.svg" title="Nginx" backText="> Apache"/>
          <Skill imageSource="skills/aws.png" title="AWS" backText="EC2, RDS, Serverless"/>
          <Skill imageSource="skills/stripe.png" title="Stripe" backText="1 year experience"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LocaleChanger from '../components/LocaleChanger'
import Coding from '../components/icons/Coding'
import Projects from '../components/icons/Projects'
import JSIcon from '../components/icons/JSIcon'
import Skill from '../components/Skill'

export default {
  name: 'Home',
  components: {
    LocaleChanger,
    Coding,
    Projects,
    JSIcon,
    Skill
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
@import '../styles/colors.scss';

.main {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  // background: url('../assets/backBlue.jpg');

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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

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

        &::before {
          transform: scaleX(0);
          transform-origin: bottom right;
        }

        &:hover::before {
          transform: scaleX(1);
          transform-origin: bottom left;
        }

        &::before {
          content: " ";
          display: block;
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          inset: 0 0 0 0;
          background: rgba(255,255,255,.2);
          z-index: -1;
          transition: transform .3s ease;
        }
      }
    }
  }
}

.skills {
  background: $midnight-blue;
  color: aliceblue;
  padding: 40px 80px;

  .title {
    font-size: 30px;
    text-align: center;
  }

  .wrapper {
    width: 800px;
    margin: 0 auto;

    .block {
      padding: 20px 0;
      border-bottom: 1px solid $deep-dark;

      .header {
        margin-bottom: 16px;
        font-size: 20px;
        font-weight: bold;
      }

      .content {
        display: flex;
        justify-content: center;

        div {
          margin-right: 12px;
        }

        .skill {
          margin-right: 12px;
          display: flex;
          flex-direction: column;
          padding: 8px;
          background: rgba(255,255,255,0.3);
          box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;


          img {
            width: 100px;
            height: 100px;
          }

          span {
            text-align: center;
            color: #000;
            font-size: 18px;
            font-weight: bold;
          }
        }
      }
    }
  }
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
