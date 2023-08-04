import { createApp } from "vue"
import App from "./App.vue"

import { i18n } from "@/i18n"
import { Quasar, Notify } from "quasar"
import quasarLang from "quasar/lang/fa-IR"
import pinia from "@/stores/init"
import router from "@/router"
import "@quasar/extras/mdi-v7/mdi-v7.css"
import "@quasar/extras/material-icons/material-icons.css"
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css"
import "quasar/src/css/index.sass"
import "@/css/main.css"
import "@/css/rtl.css"

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(i18n)
app.use(Quasar, {
  plugins: { Notify },
  lang: quasarLang,
})

app.mount("#app")
