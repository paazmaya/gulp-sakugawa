/**
 * gulp-sakugawa
 * https://github.com/paazmaya/gulp-sakugawa
 *
 * Copyright (c) Juga Paazmaya
 * Licensed under the MIT license.
 */

'use strict';

var gulp = require('gulp'),
  sakugawa = require('gulp-sakugawa');

gulp.task('default', function() {
  gulp.src('pure-min.css')
    .pipe(sakugawa())
    .pipe(gulp.dest('.'));
});
