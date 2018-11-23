<template>
<div class="q-pa-md">
  <h3>Choose your role</h3>
  <div class="row justify-around">
    <div class="col">
      <q-btn label="Investigator" color="primary" size="xl" @click="becomeInterrogator" /></div>
    <div class="col">
      <q-btn label="Suspect" color="primary" size="xl" @click="becomeSuspect" /></div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    becomeInterrogator () {
      console.log('Now Investigator')
    },
    becomeSuspect () {

    }
  }
}</script>
