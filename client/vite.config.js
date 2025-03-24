import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Important for Vercel
  build: {
    outDir: "dist", // Vercel looks for 'dist' folder
  },
});
