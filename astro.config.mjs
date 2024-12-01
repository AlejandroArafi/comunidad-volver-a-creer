import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()], // Configura Astro para usar React
  build: {
    envPrefix: "VITE_", // Prefijo necesario para que las variables de entorno puedan ser accedidas en el cliente
  },
});
