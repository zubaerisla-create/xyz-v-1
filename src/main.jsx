import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { RouterProvider } from "react-router";

import { router } from "./routes/Router.jsx";
import DarkModeProvider from "./contexts/DarkModeProviders.jsx";
import AOS from "aos";
import "aos/dist/aos.css";  // eta thik vabe import korte hobe
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router";
AOS.init({
  duration: 600,
  once: true,
  offset: 60,
  // Use a function so it re-evaluates on resize, not just at load time
  disable: () => window.innerWidth < 768,
  startEvent: 'DOMContentLoaded',
});
// Clean up HTML inline splash screen once React mounts
const splash = document.getElementById("app-splash");
if (splash) {
  splash.style.opacity = "0";
  setTimeout(() => splash.remove(), 500);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </DarkModeProvider>
  </StrictMode>
);
