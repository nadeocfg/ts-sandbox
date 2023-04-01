// vite.config.ts
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
    },
  },
  define: {
    "process.env": {},
  },
  server: {
    open: "/src/index.html",
  },
});
