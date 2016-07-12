const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');
// const watch = require('gulp-watch');
const conf = require('./gulp/conf/gulp.conf');

// Load some files into the registry
const hub = new HubRegistry([conf.path.tasks('*.js')]);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

gulp.task('inject', gulp.series(gulp.parallel('styles', 'scripts'), 'inject'));
gulp.task('build', gulp.series('partials', gulp.parallel('inject'), 'build'));
gulp.task('dist', gulp.series('build', 'setDist'));
gulp.task('test', gulp.series('scripts', 'karma:single-run'));
gulp.task('test:auto', gulp.series('watch', 'karma:auto-run'));
gulp.task('serve', gulp.series('clean', 'inject', 'browsersync', 'watch'));
//requires you to run 'gulp serve' at least once before being available
gulp.task('serve:dist', gulp.series('clean', 'build', 'setDist', 'browsersync:dist'));
gulp.task('default', gulp.series('clean', 'build'));

// -------- watchers ---------
gulp.task('watch', watch);

function reloadBrowserSync(cb) {
    browserSync.reload();
    cb();
}

function watch(cb) {

    // vendor stuff
    gulp.watch(['bower.json'], gulp.parallel('inject'));

    // html
    gulp.watch(conf.path.src('app/**/*.html'), reloadBrowserSync);

    // scss
    gulp.watch([
        conf.path.src('**/*.scss'),
        conf.path.src('**/*.css')
    ], gulp.series('styles'));

    // typescript
    gulp.watch(conf.path.src('**/*.ts'), gulp.series('scripts', reloadBrowserSync));
    cb();
}


// function watch(done) {
//   gulp.task('watch_vendor', function() {
//     return gulp.watch('bower.json', gulp.parallel('inject'));
//   });
//
//   gulp.task('watch_ts', function() {
//     return gulp.watch(conf.path.src('**/*.ts'), gulp.parallel('inject'));
//   });
//
//   gulp.task('watch_html', function() {
//     return gulp.watch(conf.path.src('app/**/*.html'), reloadBrowserSync);
//   });
//
//   gulp.task('watch_scss', function() {
//     return gulp.watch(conf.path.src('**/*.scss'), conf.path.src('**/*.css'), gulp.parallel('styles'));
//   });
//   gulp.task('watch', gulp.parallel('watch_ts', 'watch_vendor', 'watch_html', 'watch_scss'));
//
//   done()
// }

// function watch(cb) {
//
//   // gulp.watch(conf.path.src('**/*.ts'), 'bower.json', gulp.series('inject'));
//   // gulp.watch(conf.path.src('**/*.scss'), conf.path.src('**/*.css'), gulp.series('styles'));
//   // gulp.watch(conf.path.src('app/**/*.html'), reloadBrowserSync);
//
//   // gulp.watch([
//   //   // `!${conf.path.tmp('**/*.js')}`,
//   //   // `!${conf.path.tmp('**/*.html')}`,
//   //   // `!${conf.path.tmp('**/*.css')}`,
//   //   `!${conf.paths.tmp}`,
//   //   conf.path.src('index.html'),
//   //   conf.path.src('**/*.ts'),
//   //   'bower.json'
//   // ], gulp.series('inject'));
//
//   //works fine
//   gulp.watch(conf.path.src('app/**/*.html'), reloadBrowserSync);
//   gulp.watch(conf.path.src('app/**/*.html'), gulp.series('inject'));
//
//   //works fine
//   gulp.watch([
//     conf.path.src('**/*.ts'),
//     conf.path.src('**/*.js')
//   ], gulp.series('scripts'));
//
//   //works fine
//   gulp.watch([
//     conf.path.src('**/*.scss'),
//     conf.path.src('**/*.css')
//   ], gulp.series('styles', 'inject'));
//
//   cb();
// }
