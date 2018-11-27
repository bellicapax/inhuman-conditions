<template>
  <selectable-card>
    <template slot="title">
      <h4>Penalty</h4>
    </template>
    <template slot="main">
      <h5>{{ description }}</h5>
    </template>
    <template slot="button">
      <q-btn size="xl" class="bg-primary text-white full-width" label="Select" @click="selectPenalty" />
    </template>
  </selectable-card>
</template>

<script>
import SelectableCard from 'components/SelectableCard'

export default {
  components: {
    SelectableCard
  },
  props: {
    description: String,
    isSelected: Boolean,
    selectedCallback: Function
  },
  methods: {
    selectPenalty () {
      this.selectedCallback(this)
    }
  }
}
</script>

<style scoped>
h4 {
  text-align: center
}
h5 {
  text-align: center
}
</style>
