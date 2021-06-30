<template>
  <div class="skill-box">
    <div class="skill-box-inner">
      <div class="skill-box-front">
        <img :src="require(`@/assets/${imageSource}`)" />
        <span>{{ title }}</span>
      </div>
      <div class="skill-box-back" :class="{'favourite': favourite}">
        {{ backText }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  props: {
    imageSource: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    favourite: {
      type: Boolean,
      default: false
    },
    backText: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.skill-box {
  background-color: transparent;
  width: 116px;
  height: 140px;
  perspective: 1000px;

  .skill-box-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform .8s;
    transform-style: preserve-3d;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

    .skill-box-front, .skill-box-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: rgba(255,255,255,0.3);
    }

    .skill-box-front {
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

    .skill-box-back {
      padding: 10px;
      box-sizing: border-box;
      transform: rotateY(180deg);
      font-size: 18px;
      font-weight: bold;
      color: $deep-dark;

      &.favourite {
        background: $blue-green;
      }
    }
  }
}

.skill-box:hover .skill-box-inner {
  transform: rotateY(180deg);
}
</style>
