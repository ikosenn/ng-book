// Karma configuration
// Generated on Thu Jul 16 2015 07:55:56 GMT+0300 (EAT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '..',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    plugins: [
        "karma-jasmine",
        "karma-chrome-launcher",
        "karma-threshold-reporter",
        'karma-coverage'
    ],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      "src/app/templates/*.html",
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',

      'bower_components/angular-resource/angular-resource.min.js',
      'bower_components/lodash/lodash.min.js',
      'bower_components/restangular/dist/restangular.min.js',
      'test/unit/*.spec.js',
      'src/app/js/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        "src/app/js/*.js": ["coverage"],
        "src/app/templates/*.html": ["ng-html2js"]
    },

    ngHtml2JsPreprocessor: {
        moduleName: "templates",
        cacheIdFromPath: function(filepath){
            return "src/app/templates" + filepath;
        },
        stripPrefix: "src/app/"
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
        "progress",
        "coverage",
        "threshold"
    ],


    // web server port
    port: 9876,

    coverageReporter: {
        type : 'html',
        dir : 'coverage/'
    },

    thresholdReporter: {
        statements: 100,
        branches: 100,
        lines: 100,
        functions: 100
    },

    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
