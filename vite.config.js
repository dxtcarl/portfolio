import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// GitHub Pages serves a project site from https://<user>.github.io/<repo>/,
// so assets must be built with that prefix. The Pages workflow sets
// GITHUB_PAGES=1; Vercel and local dev keep the normal root base.
export default defineConfig({
  base: process.env.GITHUB_PAGES === '1' ? '/portfolio/' : '/',
  plugins: [react(), tailwindcss()],
})
