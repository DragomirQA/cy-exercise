const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://magento.softwaretestingboard.com',
    defaultCommandTimeout: 6000,
    watchForFileChanges: false,
    screenshotOnRunFailure: true,
  },
});
