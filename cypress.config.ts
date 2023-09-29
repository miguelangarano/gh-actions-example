import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://todomvc.com/examples/vanillajs",
    specPattern: "cypress/e2e/*.spec.js",
    supportFile: "cypress/support/e2e.ts",
    setupNodeEvents: (on, config) => {
    },
  },
  video: true,
});
