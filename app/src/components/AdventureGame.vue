<template>
  <div>

    <BrowserGame />

  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import AdventureGameService from "@/services/AdventureGameService";
import BrowserGame from "@/components/BrowserGame.vue";
@Component({
  components: {BrowserGame}
})
export default class AdventureGame extends Vue {

  @Prop() readonly malePlayers!: number
  @Prop() readonly femalePlayers!: number
  @Prop() readonly bottleSize!: number

  adventureGameService: AdventureGameService

  constructor() {
    super();
    this.adventureGameService = new AdventureGameService(this.malePlayers, this.femalePlayers, this.bottleSize)
  }

  mounted() {
    console.log('### malePlayers', typeof this.malePlayers, this.malePlayers)
    console.log(this.adventureGameService.calculateGame())
  }

}

</script>

