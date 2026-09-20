import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "framer-motion";
import App from "./App";
import "./index.css";

let saved: string | null = null;
try {
  saved = localStorage.getItem("theme");
} catch {
  /* ignore */
}

const prefersDark =
  typeof window.matchMedia === "function"
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : true;

document.documentElement.dataset.theme = saved ?? (prefersDark ? "dark" : "light");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </StrictMode>
);