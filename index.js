/**
 * gulp-sakugawa
 * https://github.com/paazmaya/gulp-sakugawa
 *
 * Copyright (c) Juga Paazmaya <paazmaya@yahoo.com> (https://paazmaya.fi)
 * Licensed under the MIT license.
 */

'use strict';

const path = require('path');

// through2 is a thin wrapper around node transform streams
const through = require('through2');
const File = require('vinyl');

const sakugawa = require('sakugawa');

const StringDecoder = require('string_decoder').StringDecoder;

module.exports = function gulpSakugawa(opts) {
  const options = {
    maxSelectors: typeof opts.maxSelectors === 'number' ?
      opts.maxSelectors :
      4090,
    minSheets: typeof opts.minSheets === 'number' ?
      opts.minSheets :
      1,
    mediaQueries: typeof opts.mediaQueries === 'string' ?
      opts.mediaQueries :
      'normal'
  };
  const suffix = typeof opts.suffix === 'string' ?
    opts.suffix :
    '_';

  const stream = through.obj(function(chunk, enc, cb) {
    if (!chunk.isNull()) {
      const decoder = new StringDecoder(enc);
      const css = decoder.write(chunk.contents);
      const extension = chunk.relative.split('.').pop().toLowerCase();
      const filename = extension === 'css' ?
        chunk.relative.substring(0, chunk.relative.length - 4) :
        chunk.relative;

      const pages = sakugawa(css, options);

      pages.forEach((page, index) => {
        // add new source map file to stream
        const cssFile = new File({
          cwd: chunk.cwd,
          base: chunk.base,
          path: path.join(chunk.base, '', filename) + suffix + (index + 1) + '.css',
          contents: Buffer.from(page)
        });
        this.push(cssFile);
      });
    }

    return cb();
  });

  return stream;
};
