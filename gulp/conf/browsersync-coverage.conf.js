const conf = require('./gulp.conf');

module.exports = function () {
  return {
    server: {
      baseDir: [
        conf.paths.coverage + '/PhantomJS 2.1.1 (Mac OS X 0.0.0)'
      ]
    },
    open: true
  };
};
