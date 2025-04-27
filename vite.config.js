import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { FaBeer } from "react-icons/fa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),FaBeer()],
})
