import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import fs from "fs"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "&",
        replacement: '&',
        customResolver(source) {
          if (
            fs.existsSync(
              path.resolve(
                __dirname,
                source.replace('&', `src/${process.env.VITE_SKIN}`)
              )
            )
          ) {
            return path.resolve(
              __dirname,
              source.replace('&', `src/${process.env.VITE_SKIN}`)
            )
        } else {
          return path.resolve(
            __dirname,
            source.replace('&', 'src/shared')
          )
        }
        },
      }
    ]
  }
})
