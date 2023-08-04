<template>
  <div class="q-pa-md">
    <q-card class="poem-card q-pa-md" flat>
      <div class="column items-center">
        <img class="hafez-image" src="hafez.png" width="80">
      </div>
      <div class="text-caption text-primary text-center poem">
        <p class="verse">{{ vers_1 }}</p>
        <p class="verse">{{ vers_2 }}</p>
      </div>
      <q-card-actions class="row justify-around">
        <q-btn :loading="loading" unelevated rounded color="primary" label="فال امروز" @click="getFal" size="lg">
          <template v-slot:loading>
            <q-spinner-facebook class="on-center" />
          </template>
        </q-btn>
        <q-btn unelevated rounded color="primary" label="غزل اصلی" :href="ganjoorLink" size="lg">
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import usePoem from "@/hooks/usePoem.js"
const { getPoems } = usePoem()

const vers_1 = ref("")
const vers_2 = ref("")
const ganjoorLink = ref("")
const loading = ref(false)

const getFal = async () => {
  loading.value = true
  const poems = await getPoems()
  const index = Math.floor(Math.random() * poems.length);
  vers_1.value = poems[index]["autobiographical_reference"][0]
  vers_2.value = poems[index]["autobiographical_reference"][1]
  ganjoorLink.value = poems[index]["poem_url"]
  setTimeout(() => (loading.value = false), 500)
}

onMounted(async () => {
  await getFal()
})

</script>

<style scoped>
a,
button {
  padding: 0px 15px !important;
}
</style>