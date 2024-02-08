const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://santa-secret.ru",
    testIsolation: false,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
      
    },
  },
  
  reporter: "cypress-qase-reporter",
  reporterOptions: {
      apiToken: "304c4332196fc867e30524a5c764a90db10dcc2a33f40fccd49f4f26470c1818",
      projectCode: "SANTA",
      logging: true,
      // basePath: 'https://app.qase.io/projects?status=%5B%22active%22%5D',
      // runComplete: true
      
        }
  });
     