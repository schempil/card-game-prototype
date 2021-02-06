<template>
  <div>
    <h1>AdventureGame</h1>

    <b>Male Players:</b> {{ malePlayers }}<br/>
    <b>Female Players:</b> {{ femalePlayers }}<br/>
    <b>Bottle Size:</b> {{ bottleSize }}
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import AdventureGameService from "@/services/AdventureGameService";

@Component
export default class AdventureGame extends Vue {

  @Prop() readonly malePlayers!: number
  @Prop() readonly femalePlayers!: number
  @Prop() readonly bottleSize!: number

  mounted() {
    this.adventureGameService = new AdventureGameService(this.malePlayers, this.femalePlayers, this.bottleSize)
  }

}

</script>

