var gulp = require('gulp');
var pegjs = require('gulp-pegjs');
var jasmine = require('gulp-jasmine');
var defineModule = require('gulp-define-module');

gulp.task('pegjs', function() {
  return gulp.src('grammar/parser.pegjs')
    .pipe(pegjs())
    .pipe(defineModule('commonjs'))
    .pipe(gulp.dest('src'));
});

gulp.task('watch', function() {
	gulp.watch('./grammar/*.pegjs', ['pegjs']);
});

gulp.task('jasmine', function() {
	gulp.src('test/**/*.js')
    	.pipe(jasmine());
 });

gulp.task('test', ['watch'], function() {
 	gulp.src('test/**/*.js')
    	.pipe(jasmine());
});
