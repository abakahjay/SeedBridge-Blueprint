import { createRoot } from "react-dom/client";
import { setBaseUrl } from "@workspace/api-client-react/custom-fetch";
import App from "./App";
import "./index.css";
// Fonts are bundled with the site: loading them from Google's CDN sends every visitor's IP to Google (GDPR).
import "@fontsource/outfit/300.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";
import "@fontsource/outfit/800.css";
import "@fontsource/fraunces/300.css";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/700.css";

setBaseUrl(import.meta.env.VITE_API_URL || null);

createRoot(document.getElementById("root")).render(<App />);