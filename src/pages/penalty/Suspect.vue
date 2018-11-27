<template>
  <div>
  <h4>Selected</h4>
  <div class="row">
    <div class="col-4" v-for="pen in selectedPenalties" :key="pen.description">
      <penalty :description="pen.description" />
    </div>
  </div>
  <hr>
  <h4>Unselected</h4>
  <div class="row">
    <div class="col-4" v-for="pen in unselectedPenalties" :key="pen.description">
      <penalty :description="pen.description" />
    </div>
  </div>
</div>
</template>

<script>
import Penalty from 'components/Penalty'

export default {
  components: {
    Penalty
  },
  created () {
    this.penalties = []
    this.$store.state.penalties.forEach((pen) => {
      this.penalties.push({
        description: pen,
        selected: false
      })
    })
  },
  methods: {
    selectPenalty (penalty) {},
    choosePenalty (penalty) {

    }
  },
  computed: {
    selectedPenalties () {
      if (this.penalties) {
        return this.penalties.filter((pen) => pen.selected)
      }
    },
    unselectedPenalties () {
      if (this.penalties) {
        return this.penalties.filter((pen) => !pen.selected)
      }
    }
  }
}
</script>
