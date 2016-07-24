const conf = require('./gulp.conf');

module.exports = function() {
    return {
        port: conf.ports.local,
        ui: {
            port: conf.ports.localUI
        },
        server: {
            baseDir: [
                conf.paths.tmp,
                conf.paths.src
            ],
            routes: {
                '/bower_components': 'bower_components',
                '/vendor': 'vendor'
            },
            open: "local"
        },
    };
};
