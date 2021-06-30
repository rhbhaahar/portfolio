<template>
  <div class="project-wrapper">
    <div class="project-title">
      <a :href="link" target="_blank" v-if="link">{{ title }}</a>
      <span v-else>{{ title }}</span>
    </div>
    <div class="content" @click="showModal">
      <img :src="require(`@/assets/${imageSource}`)" />
      <div class="project-info">
        <div class="line">
          <span>{{ $t('projects.theme') }}: </span>{{ $t(`projects.themes.${theme}`) }}
        </div>
        <div class="line">
          <span>{{ $t('projects.technologies') }}: </span>{{ tech }}
        </div>
        <div class="line">
          <span>{{ $t('projects.timeline') }}: </span>{{ timeline }}
        </div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: 'Project',
  props: {
    link: {
      type: String,
    },
    title: {
      type: String,
      required: true
    },
    imageSource: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      default: ''
    },
    tech: {
      type: String,
      default: ''
    },
    timeline: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.project-wrapper {
  width: 100%;
  background: $light-white;
  box-shadow: $common-box-shadow;

  .project-title {
    padding: 8px 16px;
    background: $dark-blue;

    a, span {
      font-size: 20px;
      color: $light-white;
    }
  }

  .content {
    padding: 8px 16px;
    display: flex;
    flex-direction: column;

    img {
      width: 200px;
      max-height: 135px;
    }

    .project-info {
      .line {
        margin-top: 8px;

        span {
          font-weight: bold;
        }
      }
    }
  }
}

@media(max-width: 900px) {
  .project-wrapper {
    .content {
      img {
        width: 100%;
        max-height: none;
      }
    }
  }
}
</style>
