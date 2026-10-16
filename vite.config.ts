import { defineConfig, type ViteDevServer } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

// Match GitHub Pages directory handling in local development and previews.
function privacyDirectoryRedirect(server: Pick<ViteDevServer, "middlewares">) {
  server.middlewares.use((request, response, next) => {
    const url = new URL(request.url ?? "/", "http://localhost");
    if (url.pathname === "/privacy-policy") {
      response.writeHead(302, { Location: `/privacy-policy/${url.search}` });
      response.end();
      return;
    }
    next();
  });
}
export default defineConfig({
  plugins: [react(), {
    name: "privacy-directory-redirect",
    configureServer: privacyDirectoryRedirect,
    configurePreviewServer: privacyDirectoryRedirect,
  }],
  base: "/",
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL("./index.html", import.meta.url)),
        privacy: fileURLToPath(new URL("./privacy-policy/index.html", import.meta.url)),
      },
    },
  },
});
