import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./theme/index.ts";
import "./styles/fonts.css";
import { BrowserRouter } from "react-router-dom";
import RouteMetadata from "./components/RouteMetadata.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <BrowserRouter>
        <RouteMetadata />
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
);
