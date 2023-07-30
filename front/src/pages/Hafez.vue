<template>
  <div class="q-pa-md">
    <q-card class="poem-card" flat>
      <div class="center-items">
        <img class="hafez-image" src="https://api.ganjoor.net/api/ganjoor/poet/image/hafez.gif">
      </div>
      <div class="row no-wrap items-center">
        <q-rating size="20px" v-model="stars" :max="5" color="primary" />
        <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
      </div>
      <div class="text-caption text-grey text-center poem">
        <p class="verse">{{ vers_1 }}</p>
        <p class="verse">{{ vers_2 }}</p>
      </div>

      <q-card-actions align="right">
        <q-btn flat round color="red" icon="favorite" />
        <q-btn flat round color="accent" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />

      </q-card-actions>
      <div class="center-items">
        <q-btn :loading="loading" unelevated rounded color="primary" label="تفأل" @click="getFal" size="lg"
          class="full-width">
          <template v-slot:loading>
            <q-spinner-facebook class="on-center" />
          </template>
        </q-btn>
      </div>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import usePoem from "@/hooks/usePoem.js"
const { getPoems } = usePoem()

const vers_1 = ref("")
const vers_2 = ref("")
const stars = ref(4)
const loading = ref(false)

const getFal = async () => {
  loading.value = true
  const poems = await getPoems()
  const index = Math.floor(Math.random() * poems.length);
  vers_1.value = poems[index]["تلخیص"][0]
  vers_2.value = poems[index]["تلخیص"][1]
  setTimeout(() => (loading.value = false), 1000)
}

onMounted(async () => {
  await getFal()
})

</script>