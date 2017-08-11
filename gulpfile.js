/**
 * gulp-sakugawa
 * https://github.com/paazmaya/gulp-sakugawa
 *
 * Copyright (c) Juga Paazmaya <paazmaya@yahoo.com> (https://paazmaya.fi)
 * Licensed under the MIT license.
 */

'use strict';

const gulp = require('gulp');

const gulpSakugawa = require('./index');

gulp.task('default', function task() {
  gulp.src('pure-min.css')
    .pipe(gulpSakugawa({
      maxSelectors: 400,
      mediaQueries: 'separate',
      suffix: '_'
    }))
    .pipe(gulp.dest('.'));
});
