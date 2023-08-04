<template>
  <q-layout view="hHh lpr fFf" dir="rtl">
    <q-header elevated height-hint="64" class="bg-primary">
      <q-toolbar>
        <q-toolbar-title v-if="$q.screen.gt.xs" shrink class="row items-center no-wrap">
          <img src="hafez.png" width="40">
        </q-toolbar-title>
        <q-space />

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn @click="$q.dark.toggle()" v-if="$q.screen.gt.sm" round dense flat
            :icon="$q.dark.isActive ? 'o_light_mode' : 'o_dark_mode'">
            <q-tooltip>تغییر زمینه</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="poem-container center-items">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar"
const $q = useQuasar()
$q.dark.set(true)
</script>