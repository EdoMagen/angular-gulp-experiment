const gulp  = require('gulp')
const shell = require('gulp-shell')
const gutil = require('gulp-util');

const shellCommands = [
  'echo '+ gutil.colors.blue.underline.bold('This can open LaaSServer.exe'),
  'echo '+ gutil.colors.blue.underline.bold('And do other stuff too')
];

gulp.task('shell', shell.task(shellCommands))
