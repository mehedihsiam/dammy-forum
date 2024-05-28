// import dotenv package
import dotenv from "dotenv";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// run package config
dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  // define process env
  define: {
    "process.env": process.env,
  },
  resolve: {
    alias: {
      "@": "/src",
      "#root": "/",
    },
  },
});
