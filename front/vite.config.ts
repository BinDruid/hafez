import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import checker from "vite-plugin-checker"
import { quasar, transformAssetUrls } from "@quasar/vite-plugin"

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: "src/css/quasar-variables.sass",
    }),
    checker({
      typescript: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    mainFields: ["browser", "module", "main", "jsnext:main", "jsnext"],
  },
})
