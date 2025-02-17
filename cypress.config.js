const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.pos.com.my/send/ratecalculator',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
 
  viewportHeight: 960,
  viewportWidth: 1536,
});
