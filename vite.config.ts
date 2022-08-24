import { defineConfig } from 'vite'
import svgr from "vite-plugin-svgr";
import eslint from 'vite-plugin-eslint'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), eslint(), react()]
})
