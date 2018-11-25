<template>
<q-card class="q-pa-sm q-ma-xl">
  <q-card-title>
    <h4>Penalty</h4>
  </q-card-title>
  <q-card-separator/>
  <q-card-main>
    <h5>{{ penalty }}</h5>
  </q-card-main>
  <q-btn size="xl" class="bg-primary text-white full-width" label="Select" @click="selectedCallback" />
</q-card>
</template>

<script>
export default {
  props: {
    penalty: String,
    isSelected: Boolean,
    selectedCallback: Function
  }
}
</script>
