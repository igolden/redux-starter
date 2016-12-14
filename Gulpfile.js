var gulp = require('gulp');
var fixme = require('fixme');

gulp.task('notes', function() {
  fixme({
    path:                   process.cwd(),
    ignored_directories:    ['dist/**', 'api/.bundle/**', 'http/.bundle/**', 'tmp/**', 'node_modules/**', '.bundle/**', '.git/**', 'public/**', 'bin/**'],
    file_patterns:          ['*.rb', '*.js', '*.html.erb', '*.html'],
    file_encoding:          'utf8',
    line_length_limit: 1000
  });
});
