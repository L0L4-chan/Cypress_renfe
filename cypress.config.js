const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  projectId: '81ya7j',

  viewportWidth: 2560,
  viewportHeight: 1440,
  deleteVideoOnPassed: true,
	betterRetries: true,
	reporter: 'cypress-xray-junit-reporter',
	reporterOptions: {
		mochaFile: './report/[suiteName].xml',
		useFullSuiteTitle: false,
		jenkinsMode: true,
		xrayMode: true, // if JiraKey are set correctly inside the test the XML report will contain the JiraKey value
		attachScreenshot: true, // if a test fails, the screenshot will be attached to the XML report and imported into xray
	},
  

  e2e: {
    baseUrl : "https://www.Renfe.com/es",
      "chromeWebSecurity": false,
    
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      require('cypress-xray-junit-reporter/plugin')(on, config, {}) // also needed
      return config
    },
    env: {
    //TAGS: '@focus'
  }
  },
  video: true,
  videosFolder: "results/videos"
});
