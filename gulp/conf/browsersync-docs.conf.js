const conf = require('./gulp.conf');

module.exports = function() {
    return {
        port: conf.ports.docs,
        ui: {
            port: conf.ports.docsUI
        },
        server: {
            baseDir: [
                conf.paths.docs
            ],
            routes: {
                '/bower_components': 'bower_components'
            },
            open: "local"
        },
    };
};
