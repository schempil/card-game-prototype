<template>
  <div id="game-wrapper">
    <div class="parallax background" />
    <div class="parallax mountains" v-bind:style="{ backgroundPosition: `${ xPosMountains }px 0px` }"  />
    <div class="parallax mountains-close" v-bind:style="{ backgroundPosition: `${ xPosMountainsClose }px 0px` }"  />
    <div class="parallax mountains-trees" v-bind:style="{ backgroundPosition: `${ xPosMountainsTrees }px 0px` }"  />
    <div class="parallax trees" v-bind:style="{ backgroundPosition: `${ xPosTrees }px 0px` }" />

    <div class="adventurer01" />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class BrowserGame extends Vue {

  xPosMountains = 0
  xPosMountainsClose = 0
  xPosMountainsTrees = 0
  xPosTrees = 0

  mounted() {
    setInterval(() => this.doParallaxStep(0.1))
  }

  doParallaxStep(stepSize: number) {
    this.xPosMountains = this.xPosMountains - stepSize
    this.xPosMountainsClose = this.xPosMountainsClose - stepSize * 1.5
    this.xPosMountainsTrees = this.xPosMountainsTrees - stepSize * 2
    this.xPosTrees = this.xPosTrees - stepSize * 2.5
  }

}

</script>

<style>

  #game-wrapper {
    display: flex;
    justify-content: center;
  }

  .parallax {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: repeat-x;
  }

  .background {
    /*background-image: url('../assets/game/background/bg.png');*/
    background-image: url('../assets/game/background2/parallax-demon-woods-bg.png');
  }

  .mountains {
    /*background-image: url('../assets/game/background/mountains.png');*/
    background-image: url('../assets/game/background2/parallax-demon-woods-far-trees.png');
  }

  .mountains-close {
    /*background-image: url('../assets/game/background/mountains-close.png');*/
    background-image: url('../assets/game/background2/parallax-demon-woods-mid-trees.png');
  }

  .mountains-trees {
    /*background-image: url('../assets/game/background/mountains-trees.png');*/
    background-image: url('../assets/game/background2/parallax-demon-woods-close-trees.png');
  }

  .trees {
    /*background-image: url('../assets/game/background/trees.png');*/
  }

  .adventurer01 {
    position: absolute;
    width: 20px;
    height: 20px;
    background-position: -6px -11px;
    transform: scale(4);
    left: 50px;
    bottom: 0;
    background-image: url('../assets/game/adventurers/adventurer01.png');
  }

</style>

