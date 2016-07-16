const conf = require('./gulp.conf');
const listFiles = require('./karma-files.conf');

module.exports = function (config) {
  const configuration = {
    basePath: '../../',
    singleRun: true,
    autoWatch: false,
    logLevel: 'INFO',
    junitReporter: {
      outputDir: 'test-reports'
    },
    browsers: [
      'PhantomJS'
    ],
    frameworks: [
      'phantomjs-shim',
      'jasmine',
      'angular-filesort',
      'es6-shim'
    ],
    files: listFiles(),
    preprocessors: {
      [conf.path.src('**/*.html')]: ['ng-html2js'],
      'tmp/**/*.js': 'coverage',
      'tmp/**/*.ts': 'coverage'
    },
    reporters: ['progress', 'coverage'],
    exclude: [
      './node_modules',
      './bower_components'
    ],
    ngHtml2JsPreprocessor: {
      stripPrefix: `${conf.paths.src}/`,
      moduleName: conf.ngModule
    },
    angularFilesort: {
      whitelist: [
        conf.path.tmp('**/!(*.html|*.spec|*.mock).js')
      ]
    },
    plugins: [
      require('karma-jasmine'),
      require('karma-junit-reporter'),
      require('karma-coverage'),
      require('karma-phantomjs-launcher'),
      require('karma-phantomjs-shim'),
      require('karma-ng-html2js-preprocessor'),
      require('karma-angular-filesort'),
      require('karma-es6-shim')
    ]
  };

  config.set(configuration);
};
