import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace REPO_NAME with your GitHub repo name
export default defineConfig({
  base: '/TaskManagementApp/',
  plugins: [react()]
})
