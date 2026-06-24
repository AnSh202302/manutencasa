import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      color: "brand.text",
      fontSize: "18px",
    },
    "h1, h2, h3, h4, h5, h6": {
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
          black: { value: "#404040" },
          grey: { value: "#eeeeee" },
          text: { value: "#232D42" },
          yellow: { value: "#ffb300" },
          blue: { value: "#50bdc4" },
          purple: { value: "#9a59f5" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
