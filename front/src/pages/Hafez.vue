<template>
  <div class="q-pa-md">
    <q-card class="my-card" flat bordered>
      <img src="https://cdn.quasar.dev/img/mountains.jpg">
      <div class="row no-wrap items-center">
        <q-rating size="20px" v-model="stars" :max="5" color="primary" />
        <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
      </div>
      <div class="text-caption text-grey">
        <p>{{ vers_1 }}</p>
        <p>{{ vers_2 }}</p>
      </div>

      <q-card-actions align="right">
        <q-btn flat round color="red" icon="favorite" />
        <q-btn flat round color="accent" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
        <q-btn :loading="loading" color="primary" round @click="getFal" icon="o_refresh">
          <template v-slot:loading>
            <q-spinner-hourglass class="on-center" />
          </template>
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

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>