exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/mainSubmitCtrlspec.js'],
  capabilities: {
    //browserName: 'firefox'
    browserName: 'chrome'
  }
}