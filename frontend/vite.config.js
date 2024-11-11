import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

function autoprefixer() {

}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: ['@babel/plugin-transform-react-jsx'],
    }
  }
  )],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    }
  }
})
