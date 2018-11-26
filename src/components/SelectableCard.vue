<template>
  <q-card class="q-ma-lg q-pa-sm">
    <q-card-title>
      <slot name="title"></slot>
    </q-card-title>
    <q-card-separator />
    <q-card-main>
      <slot name="main"></slot>
    </q-card-main>
    <slot name="button"></slot>
  </q-card>
</template>
