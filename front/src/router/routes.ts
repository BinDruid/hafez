import type { RouteRecordRaw } from "vue-router"

const PublicRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/Hafez.vue"),
    children: [],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("@/pages/ErrorNotFound.vue"),
  },
]

const PrivateRoutes: RouteRecordRaw[] = []

export default [...PublicRoutes, ...PrivateRoutes]
