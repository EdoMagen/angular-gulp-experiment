const gutil = require('gulp-util');
const gulp  = require('gulp')
const shell = require('gulp-shell')

gulp.task('shell', shell.task([
  'echo '+ gutil.colors.blue.underline.bold('This can open LaaSServer.exe'),
  'echo '+ gutil.colors.blue.underline.bold('And do other stuff too')
]))
