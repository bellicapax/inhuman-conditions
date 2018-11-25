<template>
<div>
  <q-card class="q-ma-xl q-pa-sm">
    <q-card-title>
      <h4>{{ job }}</h4>
    </q-card-title>
    <q-card-separator />
    <q-card-main>
      <h5>{{ overview }}</h5>
    </q-card-main>
      <q-btn size="xl" class="bg-primary text-white full-width" label="Select" @click="selectJob" />
  </q-card>
</div>
</template>

<script>
export default {
  props: {
    job: String,
    overview: String
  },
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
