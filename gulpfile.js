const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');
// const watch = require('gulp-watch');
const conf = require('./gulp/conf/gulp.conf');

// Load some files into the registry
const hub = new HubRegistry([conf.path.tasks('*.js')]);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

// Injects html and processes and copies files to tmp folder
gulp.task('inject', gulp.series('shell', gulp.parallel('styles', 'scripts'), 'inject'));
// Processes JS, CSS files from tmp concatinates and copies files to dist folder
gulp.task('build', gulp.series('partials', gulp.parallel('inject'), 'build'));
gulp.task('dist', gulp.series('build')); // had , 'notSureWhatThisFunctionDoes'
gulp.task('runserver', gulp.series('shell:runServer'));
gulp.task('docs', gulp.series('clean', 'ngdocs', 'browsersync:docs'));
gulp.task('test', gulp.series('scripts', 'karma:single-run'));
// If tests fail at first save again. TODO: make sure 'scripts' task finishes before karma starts
gulp.task('test:auto', gulp.series('watch', 'karma:auto-run'));
gulp.task('serve', gulp.series('clean', 'inject', 'browsersync', 'watch'));
gulp.task('serve:dist', gulp.series('clean', 'build', 'browsersync:dist')); //had , 'notSureWhatThisFunctionDoes' - no idea what that is
gulp.task('default', gulp.series('clean', 'build'));

// -------- watchers ---------
gulp.task('watch', watch);

function reloadBrowserSync(cb) {
    browserSync.reload();
    cb();
}

// TODO: move to separate file in gulp/gulp_tasks
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
