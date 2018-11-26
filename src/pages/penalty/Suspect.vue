<template>
  <div class="row">
    <div v-for="pen in getPenalties()" :key="pen">
      <penalty :description="pen"/>
    </div>
  </div>
</template>

<script>
import Penalty from 'components/Penalty'

export default {
  components: {
    Penalty
  },
  methods: {
    selectPenalty (penalty) {
    },
    getPenalties () {
      return this.$store.state.penalties
    }
  }
}
</script>
