/* eslint-disable arrow-body-style */
// https://docs.cypress.io/guides/guides/plugins-guide.html

// if you need a custom webpack configuration you can uncomment the following import
// and then use the `file:preprocessor` event
// as explained in the cypress docs
// https://docs.cypress.io/api/plugins/preprocessors-api.html#Examples

// /* eslint-disable import/no-extraneous-dependencies, global-require */
// const webpack = require('@cypress/webpack-preprocessor')
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = (on, config) => {
  // on('file:preprocessor', webpack({
  //  webpackOptions: require('@vue/cli-service/webpack.config'),
  //  watchOptions: {}
  // }))
  on("file:preprocessor", cucumber());

  return Object.assign({}, config, {
    fixturesFolder: "tests/fixtures",
    integrationFolder: "tests/specs",
    screenshotsFolder: "tests/screenshots",
    videosFolder: "tests/videos",
    supportFile: "tests/support/index.js",
    testFiles: "**/*.{feature,features}"
  });
};