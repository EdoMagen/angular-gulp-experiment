const gulp = require('gulp');
const gutil = require('gulp-util');
const typedoc = require("gulp-typedoc");
const conf = require('../conf/gulp.conf');

gulp.task('ngdocs', ngdocs);

const docOptions = {
    // TypeScript options (see typescript docs)
    module: "commonjs",
    target: "ES5",
    includeDeclarations: true,
    emitDecoratorMetadata: true,
    experimentalDecorators: true,

    // TypeDoc options (see typedoc docs)
    out: conf.paths.docs,
    name: "stms FE",
    version: true,
    noLib: false,
    
    // Define .spec.ts files as external to keep the docs clean
    externalPattern: "**/*/*spec.ts"
}

function ngdocs() {
  return gulp
      .src([conf.paths.src])
      .pipe(typedoc(docOptions)).on('error', conf.errorHandler('TypeDoc'));
}
