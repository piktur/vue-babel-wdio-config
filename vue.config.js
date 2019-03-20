module.exports = {
  pluginOptions: {
    'vue-cli-plugin-e2e-webdriverio': {
      config: null,
      specs: 'tests/e2e/*',
      baseUrl: 'http://localhost:8080/',
      capabilities: ['desktop'],
      headless: false,
      debug: false,
    }
  }
}
