import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      color: "brand.black",
    },
  },
  theme: {
    tokens: {
      fonts: {
        body: { value: "Roboto, sans-serif" },
        heading: { value: "Poppins, sans-serif" },
      },
      colors: {
        brand: {
          primary: { value: "#f54646" },
          white: { value: "#ffffff" },
          black: { value: "#232D42" },
          yellow: { value: "#ffb300" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
