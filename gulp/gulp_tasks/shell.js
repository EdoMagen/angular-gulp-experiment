const gulp  = require('gulp')
const shell = require('gulp-shell')
const gutil = require('gulp-util');

const shellCommands = [
  'echo '+ gutil.colors.blue.underline.bold('This can open LaaSServer.exe'),
  'echo '+ gutil.colors.blue.underline.bold('Insalling typings...'),
  'typings install',
];

const shellRunServerCommands = [
  'echo '+ gutil.colors.blue.underline.bold('This opens LaaSServer.exe'),
];

gulp.task('shell', shell.task(shellCommands))

gulp.task('shell:runServer', shell.task(shellRunServerCommands))
