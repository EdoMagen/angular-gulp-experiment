const path = require('path');
const gulp = require('gulp');
const del = require('del');
const filter = require('gulp-filter');
const gutil = require('gulp-util');

const conf = require('../conf/gulp.conf');

gulp.task('clean', clean);
gulp.task('clean:docs', cleanDocs);
gulp.task('clean:coverage', cleanCoverage);
gulp.task('clean:all', cleanAll);
gulp.task('notSureWhatThisFunctionDoes', notSureWhatThisFunctionDoes);

function clean() {
  return del([conf.paths.dist, conf.paths.tmp]).then(paths => {
    // this.message = paths.join('\n');
    gutil.log(gutil.colors.green('Deleted \'tmp\' and \'dist\' folders'));
  });
}

function cleanAll() {
  return del([conf.paths.dist,
            conf.paths.tmp,
            conf.paths.docs,
            conf.paths.coverage]).then(paths => {
    // this.message = paths.join('\n');
    gutil.log(gutil.colors.green('Deleted \'tmp\', \'dist\', \'docs\' and \'coverage\' folders'));
  });
}

function cleanDocs() {
  return del([conf.paths.docs]).then(paths => {
    // this.message = paths.join('\n');
    gutil.log(gutil.colors.green('Deleted \'docs\' folder'));
  });
}

function cleanCoverage() {
  return del([conf.paths.coverage]).then(paths => {
    // this.message = paths.join('\n');
    gutil.log(gutil.colors.green('Deleted \'coverage\' folder'));
  });
}

function notSureWhatThisFunctionDoes() {
  const fileFilter = filter(file => file.stat.isFile());

  return gulp.src([
      path.join(conf.paths.src, '/**/*.js'),
      path.join(`!${conf.paths.src}`, '/**/*.{html,css,js,scss}')
    ])
    .pipe(fileFilter)
    .pipe(gulp.dest(conf.paths.dist));
}
