const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    ////baseUrl : 'https://demoqa.com/',
    //viewportwidth: 1000,
    //viewportHaight: 1000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
    },
  },
});
