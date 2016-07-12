// const gulp = require('gulp')
// const conf = require('../conf/gulp.conf');
// const inject = require('./inject');
//
// gulp.task('watch', watch);
//
// function reloadBrowserSync(cb) {
//     browserSync.reload();
//     cb();
// }
//
// function watch(cb) {
//     gulp.watch([
//         conf.paths.src,
//         'bower.json'
//     ], gulp.parallel('inject'));
//
//     gulp.watch(conf.path.src('app/**/*.html'), reloadBrowserSync);
//
//     //works fine
//     gulp.watch([
//         conf.path.src('**/*.scss'),
//         conf.path.src('**/*.css')
//     ], gulp.series('styles'));
//
//     gulp.watch(conf.path.src('**/*.ts'), gulp.series('inject'));
//     cb();
// }
