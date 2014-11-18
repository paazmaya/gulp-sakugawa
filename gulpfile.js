/**
 * gulp-sakugawa
 * https://github.com/paazmaya/gulp-sakugawa
 *
 * Copyright (c) Juga Paazmaya
 * Licensed under the MIT license.
 */

'use strict';

var gulp = require('gulp'),
  gulpSakugawa = require('./index');

gulp.task('default', function() {
  gulp.src('pure-min.css')
    .pipe(gulpSakugawa({
      maxSelectors: 400,
      mediaQueries: 'separate'
    }))
    .pipe(gulp.dest('.'));
});
