const conf = require('./gulp.conf');
const wiredep = require('wiredep');

module.exports = function listFiles() {
  const wiredepOptions = Object.assign({}, conf.wiredep, {
    dependencies: true,
    devDependencies: true
  });

  const patterns = wiredep(wiredepOptions).js.concat([
    // 'node_modules/babel-polyfill/browser.js', //doesn't work
    // `!${conf.path.tmp('**/*.spec.js')}`, //doesn't work

    // conf.path.tmp('app/todos/todos.js'),
    // conf.path.tmp('index.js'),
    // conf.path.tmp('app/constants/*.js'),
    // conf.path.tmp('app/containers/*.js'),
    // conf.path.tmp('app/components/*.js'),
    // conf.path.tmp('**/*.js'),

    conf.path.tmp('app/todos/*.js'),
    conf.path.tmp('**/*.js'),
    conf.path.tmp('app.js'),
    conf.path.tmp('app/**/*.js'),
    conf.path.src('**/*.html')
  ]);

  const files = patterns.map(pattern => ({pattern}));
  files.push({
    pattern: conf.path.src('/**/*'),
    included: false,
    served: true,
    watched: true
  });
  return files;
};
