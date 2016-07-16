const conf = require('./gulp.conf');

module.exports = function() {
    return {
        port: conf.ports.dist,
        ui: {
            port: conf.ports.distUI
        },
        server: {
            baseDir: [
                conf.paths.dist
            ]
        },
        open: false
    };
};
