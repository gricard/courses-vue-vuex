// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

var webpackConfig = require('../../build/webpack.test.conf');

module.exports = function (config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
    reporters: ['spec', 'coverage'],
    // old style of testing entire bundle
    // files: ['./index.js'],
    // preprocessors: {
    //   './index.js': ['webpack', 'coverage', 'sourcemap']
    // },

      files: [
          '../../src/**/*.js',
          '../../src/**/*.vue',
          '../../test/unit/**/*.spec.js'
      ],
      preprocessors: {
          '../../src/**/*.js': [ 'webpack', 'coverage', 'sourcemap'],
          '../../src/**/*.vue': [ 'webpack', 'coverage', 'sourcemap'],
          '../../test/unit/**/*.spec.js': [ 'webpack']
      },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        {
            type: 'lcov',
            subdir: '.'
        },
        { type: 'text' },
        {
          type : 'html',
          dir : 'coverage/'
        }

      ]
    },
    client: {
      mocha: {
          bail: true
      }
    }
  });
};
