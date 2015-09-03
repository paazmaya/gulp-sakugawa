/**
 * gulp-sakugawa
 * https://github.com/paazmaya/gulp-sakugawa
 *
 * Copyright (c) Juga Paazmaya
 * Licensed under the MIT license.
 */

'use strict';

// Add addImport options
// addImport == true => modify existing file to import from generated files
// through2 is a thin wrapper around node transform streams
var through = require('through2');
var File = require('vinyl');
var path = require('path');

var sakugawa = require('sakugawa');
var gutil = require('gulp-util');

var StringDecoder = require('string_decoder').StringDecoder;


module.exports = function gulpSakugawa(opts) {
  var options = {
    maxSelectors: opts.maxSelectors || 4090,
    minSheets: opts.minSheets || 1,
    mediaQueries: opts.mediaQueries || 'normal',
    addImport: opts.addImport || false
  };
  var suffix = opts.suffix || '_';

  var stream = through.obj(function(chunk, enc, cb) {

    if (!chunk.isNull()) {
      var _self = this;
      var decoder = new StringDecoder(enc);
      var css = decoder.write(chunk.contents);

      var pages = sakugawa(css, options);
      var imports = "";
      

      pages.forEach(function (page, index) {
      	var cssFileName = chunk.relative.replace(/\.css$/, '') + suffix + (index + 1) + '.css';
      	
      	imports = imports + "@import '" + cssFileName + "';\n";

        // add new source map file to stream
        var cssFile = new File({
          cwd: chunk.cwd,
          base: chunk.base,
          path: path.join(chunk.base, '', cssFileName),
          //  path: path.join(chunk.base, '', chunk.relative) + suffix + (index + 1) + '.css',
          contents: new Buffer(page)
        });
        _self.push(cssFile);
      });

      if(options.addImport) {
		    var cssFile = new File({
	        cwd: chunk.cwd,
	        base: chunk.base,
	        path: path.join(chunk.base, '', chunk.relative),
	        contents: new Buffer(imports)
	      });
			}
	    _self.push(cssFile);
    }
    return cb();
  });

  return stream;
};
