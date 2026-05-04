import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";

const config = defineConfig({
  define: {
    __BUILD_DATE__: JSON.stringify(new Date().toISOString()), // ISO format
  },
  plugins: [
    devtools(),
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    viteReact(),
  ],
});

export default config;
