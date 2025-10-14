//vite.config.ts
/*
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  plugins: [react()],
  base: isProduction ? "/sweet-moment-candy/" : "/", 
});
*/


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // dominio personalizado -> raíz del sitio
});
  