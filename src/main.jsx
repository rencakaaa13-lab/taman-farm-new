import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

/* VERCEL ANALYTICS */
import { Analytics } from "@vercel/analytics/react";

/* VERCEL SPEED INSIGHTS */
import { SpeedInsights } from "@vercel/speed-insights/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <App />

    {/* Analytics Pengunjung */}
    <Analytics />

    {/* Speed & Performance */}
    <SpeedInsights />

  </React.StrictMode>
)