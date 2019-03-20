const {
  capabilities,
  Chrome,
} = require('vue-cli-plugin-e2e-webdriverio').capabilities

capabilities.register('desktop', new Chrome({
  cssDeviceType: 'desktop',
  viewportSize: {
    width: 1024,
    height: 768,
  },
}))

exports.config = {
  mochaOpts: {
    compilers: ['js:@babel/register'],
  },
}
