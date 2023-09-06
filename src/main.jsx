import * as React from "react";
import { createRoot } from "react-dom/client";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { useColorScheme } from "@mui/joy/styles";
import Typography from "@mui/joy/Typography";
import App from "./App";
import theme from "./theme";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <CssVarsProvider
      theme={theme}
      defaultMode="system"
      modeStorageKey="system_light_dark_mode"
    >
      <CssBaseline />
      
      {/* <IdentifySystemMode /> */}
      <App />
    </CssVarsProvider>
  </React.StrictMode>
);
