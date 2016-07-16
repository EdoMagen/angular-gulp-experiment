const gulp = require('gulp');
const browserSync = require('browser-sync');
const wiredep = require('wiredep').stream;
const angularFilesort = require('gulp-angular-filesort');
const gulpInject = require('gulp-inject');

const conf = require('../conf/gulp.conf');

gulp.task('inject', inject);


// New order for LaaS
//
//


function inject() {
  const injectScripts = gulp.src([
    // include (in this order)
    conf.path.tmp('app/todos/*.js'),
    conf.path.tmp('**/*.js'),
    conf.path.tmp('app.js'),
    conf.path.tmp('app/**/*.js'),

    // avoid
    '!src/**/*.ts',
    `!${conf.path.tmp('**/*.spec.js')}`
  ]);

  const injectOptions = {
    ignorePath: [conf.paths.src, conf.paths.tmp],
    addRootSlash: false
  };

  return gulp.src(conf.path.src('index.html'))
    .pipe(wiredep(Object.assign({}, conf.wiredep)))
    .pipe(gulpInject(injectScripts, injectOptions))
    .pipe(gulp.dest(conf.paths.tmp))
    .pipe(browserSync.stream());
}
