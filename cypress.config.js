const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'fhc7cu',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://demo.opencartbrasil.com.br/',
  },
});
