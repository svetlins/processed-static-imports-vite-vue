import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import fs from 'fs'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'branding-resolver',
      async resolveId(source, importer, options) {
        if (source.startsWith('@test')) {
          const brandedPath = source.replace('@test', `@/${process.env.VITE_SKIN}`)
          const defaultPath = source.replace('@test', `@/shared`)

          const brandedModule = await this.resolve(brandedPath, importer, options)

          if (brandedModule && fs.existsSync(brandedModule.id)) {
            return brandedModule
          }

          return await this.resolve(defaultPath, importer, options)
        }
        return null
      },
    },
  ],
  resolve: {
    alias: [{ find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }],
  },
})
