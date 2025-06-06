import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css"; // Ensure you have a CSS file for global styles
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
