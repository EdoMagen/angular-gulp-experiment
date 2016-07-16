const gulp = require('gulp');
const tslint = require('gulp-tslint');
// const typescript = require('gulp-typescript');
const typescript = require('gulp-tsc');
// const tsConf = require('../../tsconfig.json').compilerOptions;
const conf = require('../conf/gulp.conf');

gulp.task('scripts', scripts);

function scripts() {
  const tscOptions = {
    module: "CommonJS",
    tmpDir: "./tmp",
    keepTree: false,
    sourcemap: true,
    emitError: false
  }

  // return gulp.src(conf.path.src('**/*.ts'))
  return gulp.src(['src/**/*.ts'])
    .pipe(tslint())
    .pipe(tslint.report('verbose')).on('error', conf.errorHandler('TS'))
    .pipe(typescript(tscOptions)) // .pipe(typescript(tsConf)) // see matching const
    .pipe(gulp.dest(conf.paths.tmp));
}
