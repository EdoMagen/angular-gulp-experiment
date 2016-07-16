const gulp = require('gulp');
const browserSync = require('browser-sync');
const spa = require('browser-sync-spa');

const browserSyncConf = require('../conf/browsersync.conf');
const browserSyncDistConf = require('../conf/browsersync-dist.conf');
const browserSyncDocsConf = require('../conf/browsersync-docs.conf');
const browserSyncCoverageConf = require('../conf/browsersync-coverage.conf');

browserSync.use(spa());

gulp.task('browsersync', browserSyncServe);
gulp.task('browsersync:dist', browserSyncDist);
gulp.task('browsersync:docs', browserSyncDocs);
gulp.task('browsersync:coverage', browserSyncCoverage);

function browserSyncServe(done) {
  browserSync.init(browserSyncConf());
  done();
}

function browserSyncDist(done) {
  browserSync.init(browserSyncDistConf());
  done();
}
function browserSyncDocs(done) {
  browserSync.init(browserSyncDocsConf());
  done();
}
function browserSyncCoverage(done) {
  browserSync.init(browserSyncCoverageConf());
  done();
}
