<template>
  <svg height="100vh" width="100vw" style="background: rgba(0, 255, 0, 0); z-index: 1">
    <image class="unblurred" href="../assets/game/adventurers/adventurer01.png" width="5000"  />
  </svg>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class GameWrapper extends Vue {

}

</script>

<style>

  .unblurred {
    image-rendering: optimizeSpeed;             /*                     */
    image-rendering: -moz-crisp-edges;          /* Firefox             */
    image-rendering: -o-crisp-edges;            /* Opera               */
    image-rendering: -webkit-optimize-contrast; /* Chrome (and Safari) */
    image-rendering: pixelated;                 /* Chrome as of 2019   */
    image-rendering: optimize-contrast;         /* CSS3 Proposed       */
    -ms-interpolation-mode: nearest-neighbor;   /* IE8+                */
  }

</style>

