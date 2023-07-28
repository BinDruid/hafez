// import { storeToRefs } from "pinia"
import { createWebHistory, createRouter } from "vue-router"
import routes from "@/router/routes"
// import useAuthStore from "@/stores/auth"

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
