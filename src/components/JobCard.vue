<template>
  <div>
    <selectable-card>
      <template slot="title">
        <h4>{{ title }}</h4>
      </template>
      <template slot="main">
        <h5>{{ main }}</h5>
      </template>
      <template slot="button">
        <q-btn size="xl" class="bg-primary text-white full-width" label="Select" @click="selectJob" />
      </template>
    </selectable-card>
  </div>
</template>

<script>
import SelectableCard from 'components/SelectableCard'
import {CardMix} from '../mixins/Mixins'

export default {
  components: {
    SelectableCard
  },
  mixins: [
    CardMix
  ],
  data () {
    return {}
  },
  methods: {
    selectJob () {
      this.$store.commit('setJob', this.job)
      this.$router.push('new/' + this.job.toLowerCase())
    }
  }
}
</script>
