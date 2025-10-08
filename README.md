# webdriverio-appium-app-browserstack
This repository is to test if the device passcode is wrokign as expected on the dedicated device on BrowserStack App Automate

<div align="center">
<img src = "https://www.browserstack.com/images/layout/browserstack-logo-600x315.png" > <br>
<img src = "https://webdriver.io/img/webdriverio.png"  height="140px">
</div>


## Setup

### Requirements

* Node.js 8.11.2+
  - If you don't have Node installed, download it from [here](https://nodejs.org/en/)

### Install the dependencies


```sh
npm i
```

### Run sample test:
  - Test script is available in `run-sample-test` directory under examples folder

## Configure Environment Variables
  -  Configure BrowserStack username and accesskey them as environment variables using the below commands.
  
  - For \*nix based and Mac machines:

  ```sh
  export BROWSERSTACK_USERNAME=<browserstack-username> &&
  export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```

  - For Windows:

  ```shell
  set BROWSERSTACK_USERNAME=<browserstack-username>
  set BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```

## Ensure the device id is accurate
  -   The device config is available in this path examples/run-sample-test/test.conf.js
  -   Make sure the deviceId field in the `commonCapabilities` section is accurate

## Running your tests
- To run tests, run `npm run test`