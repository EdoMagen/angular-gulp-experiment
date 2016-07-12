const path = require('path');

const gulp = require('gulp');
const del = require('del');
const filter = require('gulp-filter');
const gutil = require('gulp-util');

const conf = require('../conf/gulp.conf');

gulp.task('clean', clean);
gulp.task('setDist', setDist);

function clean() {
  return del([conf.paths.dist, conf.paths.tmp]).then(paths => {
    // this.message = paths.join('\n');
    gutil.log(gutil.colors.green('Deleted \'tmp\' and \'dist\' folders'));
  });
}

function setDist() {
  const fileFilter = filter(file => file.stat.isFile());

  return gulp.src([
      path.join(conf.paths.src, '/**/*.js'),
      path.join(`!${conf.paths.src}`, '/**/*.{html,css,js,scss}')
    ])
    .pipe(fileFilter)
    .pipe(gulp.dest(conf.paths.dist));
}
