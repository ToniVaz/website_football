import { createRoot } from "react-dom/client";
import App from "./presentation/App.jsx";
import { AxiosFetch } from "./infrastructure/http/axiosConfig.js";
import { SWRConfig } from "swr";
import "./global-styles/index.css";

createRoot(document.getElementById("root")!).render(
  <SWRConfig value={{ fetcher: AxiosFetch }}>
    <App />
  </SWRConfig>
);
