var api= require('../api');

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
  
  hostname: 'hub.browserstack.com',
  
  specs: [
    './specs/passcode_test.js'
],

  services: [
    [
      'browserstack',
      {
        buildIdentifier: '${BUILD_NUMBER}',
        browserstackLocal: false,
        //opts: { forcelocal: false, localIdentifier: "webdriverio-appium-app-browserstack-repo" },
        app: process.env.BROWSERSTACK_APP_PATH || './examples/regression.apk',
        percy: false
      }
    ]
  ],

  reporters: [
    ['mochawesome', {
      outputDir: './reports/mochawesome', // Directory where the reports will be saved
      mochawesome_opts: {
        reportDir: './reports/mochawesome',  // Directory where the HTML report will be generated
        reportFilename: 'wdio-mochawesome',  // Name of the report file
        quiet: true,                         // Suppresses output to the console
        json: false,                         // Generates only HTML report
        html: true,                          // Generates the HTML report
        overwrite: true,                     // Overwrites the existing report file
        timestamp: true                      // Adds a timestamp to the report filename
      }
    }]
  ],
  

  capabilities: [{
    'bstack:options': {
      deviceName: 'Samsung Galaxy S24',
      osVersion: "14.0",
      platformName: "android"
    }
  }],

  commonCapabilities: {
    'bstack:options': {
      projectName: "BrowserStack Samples",
      buildName: 'browserstack build',
      sessionName: 'BStack parallel webdriverio-appium',
      debug: true,
      networkLogs: true,
      source: 'webdriverio:appium-sample-sdk:v1.0',
      dedicatedDevice: true,
      deviceId: "RZCX50MNVTE",
      enablePasscode: true
    }
  },

  maxInstances: 10,

  updateJob: false,
  
  exclude: [],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 20000
  }
};

// Code to support common capabilities
exports.config.capabilities.forEach(async(caps) => {
  for(let key in exports.config.commonCapabilities) 
    caps[key] = { ...caps[key], ...exports.config.commonCapabilities[key]};
});
