import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/reusables/ScrollToTop";
import { AppProvider } from "@/components/reusables/AppContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <AppProvider>
        <ScrollToTop />
        <App />
      </AppProvider>
    </StrictMode>
  </BrowserRouter>
);
