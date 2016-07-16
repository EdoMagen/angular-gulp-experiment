'use strict';

/**
 *  This file contains the variables used in other gulp task definition files
 *  By design, here we only put very generic config values
 *  which are used in several places to keep good readability
 *  of the tasks
 */

const path = require('path');
const gutil = require('gulp-util');

exports.ngModule = 'app';

/**
 *  The main paths of our project handle these with care
 */
exports.paths = {
  main: './',
  vendor: 'bower_components',
  src: 'src',
  dist: 'dist',
  tmp: 'tmp',
  docs: 'docs',
  coverage: 'coverage',
  e2e: 'e2e',
  tasks: './gulp/gulp_tasks'
};

/**
 *  Ports for the browserSync tasks
 */
exports.ports = {
  local: 8080,
  localUI: 8081,
  coverage: 8082,
  coverageUI: 8082,
  docs: 8083,
  docsUI: 8084,
  dist: 8085,
  distUI: 8086
};

exports.path = {};
for (const pathName in exports.paths) {
  if (exports.paths.hasOwnProperty(pathName)) {
    exports.path[pathName] = function pathJoin() {
      const pathValue = exports.paths[pathName];
      const funcArgs = Array.prototype.slice.call(arguments);
      const joinArgs = [pathValue].concat(funcArgs);
      return path.join.apply(this, joinArgs);
    };
  }
}

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
exports.errorHandler = function (title) {
  return function (err) {
    gutil.log(gutil.colors.red(`[${title}] - ` + err.message.toString()));
    // gutil.log(gutil.colors.red(`[${title}]`), err.message.toString());
    this.emit('end');
  };
};

/**
 *  Wiredep is the lib which inject bower dependencies in our project
 *  Mainly used to inject script tags in the index.html but also used
 *  to inject css preprocessor deps and js files in karma
 */
exports.wiredep = {
  exclude: [/\/bootstrap\.js$/, /\/bootstrap-sass\/.*\.js/, /\/bootstrap\.css/],
  directory: 'bower_components'
};
