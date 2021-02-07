<template>
    <AdventureGame
     :bottle-size=3
     :male-players=2
     :female-players=2
    />
</template>

<script>
import AdventureGame from "@/components/AdventureGame";

export default {
  name: 'Adventure',
  components: {
    AdventureGame,

  }
}
</script>