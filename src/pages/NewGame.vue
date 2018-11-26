<template>
<div class="q-pa-md">
  <h3>Choose your role</h3>
  <div class="row justify-around">
    <div class="col">
      <job-card v-bind="Investigator"/>
    </div>
    <div class="col">
      <job-card v-bind="Suspect"/>
    </div>
  </div>
</div>
</template>

<script>
import JobCard from 'components/JobCard'

export default {
  components: {
    JobCard
  },
  data () {
    return {
      Investigator: {
        title: 'Investigator',
        main: 'The Investigator always has the same two goals, which go hand in hand: Ensure all human Suspects are properly identified as HUMAN, AND, Ensure all robot Suspects are identified as ROBOT and safely detained. The Investigator loses if the Suspect is incorrectly identified, or if they are killed during the course of their duties by a Violent Robot..'
      },
      Suspect: {
        title: 'Suspect',
        main: 'The Suspect\'s goals may change, depending on their role. However, ALL Suspects, robots and humans alike, share one common, overriding objective: Convince the Investigator that you are a human. Any Suspect who is identified as a robot (whether or not that identification is correct) loses. Additionally, robots will have some programming which they must obey.'
      }
    }
  },
  methods: {
    becomeInterrogator () {
      console.log('Now Investigator')
    },
    becomeSuspect () {

    }
  }
}</script>
