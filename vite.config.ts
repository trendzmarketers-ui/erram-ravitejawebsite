import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  build: {
    // Target modern browsers for smaller output
    target: 'es2020',

    // Split vendor code into separate cacheable chunks
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React stays in one chunk (cached across navigations)
          'vendor-react': ['react', 'react-dom', 'react-router'],
          // Animation library (heavy) — lazy loaded with components that use it
          'vendor-motion': ['motion'],
          // UI libraries
          'vendor-ui': ['lucide-react'],
        },
      },
    },

    // Enable CSS code splitting for route-based lazy chunks
    cssCodeSplit: true,

    // Compress output
    minify: 'esbuild',
  },
})
