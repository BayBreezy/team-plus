import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
// Good for dev so you can view app on mobile devices
import { qrcode } from "vite-plugin-qrcode";
import { coverageConfigDefaults } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      exclude: [
        "src/main.tsx",
        "src/layouts/**/*",
        "src/App.tsx",
        "src/types/*",
        "src/components/ui/**/*",
        ...coverageConfigDefaults.exclude,
      ],
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    qrcode(),
    VitePWA({
      registerType: "prompt",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "Team Plus",
        short_name: "Team Plus",
        icons: [
          {
            src: "/icons/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/pwa-maskable-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/icons/pwa-maskable-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        start_url: "/",
        display: "standalone",
        background_color: "#FFFFFF",
        theme_color: "#FFFFFF",
        description:
          "Team Plus is your personal project management tool for efficient team collaboration.",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    origin: "http://0.0.0.0:5173",
  },
});
