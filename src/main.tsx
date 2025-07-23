import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/index.css";

import App from "@/App.tsx";
import { ThemeProvider } from "@/context/theme-context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider storageKey="team-plus-theme" defaultTheme="system">
      <App />
    </ThemeProvider>
  </StrictMode>
);
