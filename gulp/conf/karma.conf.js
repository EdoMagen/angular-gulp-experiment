const conf = require('./gulp.conf');
const listFiles = require('./karma-files.conf');

module.exports = function (config) {
  const configuration = {
    // basePath: '../../',
    // singleRun: true,
    // autoWatch: false,
    // logLevel: 'INFO',
    // junitReporter: {
    //   outputDir: 'test-reports'
    // },
    // browsers: [
    //   'PhantomJS'
    // ],
    // frameworks: [
    //   'phantomjs-shim',
    //   'jasmine',
    //   'angular-filesort',
    //   'es6-shim'
    // ],
    // files: listFiles(),
    // preprocessors: {
    //   [conf.path.src('**/*.html')]: [
    //     'ng-html2js'
    //   ]
    // },
    // ngHtml2JsPreprocessor: {
    //   stripPrefix: `${conf.paths.src}/`,
    //   moduleName: 'app'
    // },
    // angularFilesort: {
    //   whitelist: [
    //     conf.path.tmp('**/!(*.html|*.spec|*.mock).js')
    //   ]
    // },
    // plugins: [
    //   require('karma-jasmine'),
    //   require('karma-junit-reporter'),
    //   require('karma-coverage'),
    //   require('karma-phantomjs-launcher'),
    //   require('karma-phantomjs-shim'),
    //   require('karma-ng-html2js-preprocessor'),
    //   require('karma-angular-filesort'),
    //   require('karma-es6-shim')
    // ]

    //---------------------------------------------------------------

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../../',

    frameworks: [
      'phantomjs-shim',
      'jasmine',
      'angular-filesort',
      'es6-shim'
    ],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: listFiles(),

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false

  };

  config.set(configuration);
};
