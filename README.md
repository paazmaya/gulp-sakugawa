# gulp-sakugawa (グルプ佐久川)

> Run [Sakugawa][] via [gulp](http://gulpjs.com/ "The streaming build system"),
> for CSS splitting, filtering and organising.

![Mr Sakugawa enjoying the taste of gulp](./logo.png)

[![Analytics](https://ga-beacon.appspot.com/UA-2643697-15/gulp-sakugawa/index)](https://github.com/igrigorik/ga-beacon)
[![Dependency Status](https://img.shields.io/david-dm/paazmaya/gulp-sakugawa.svg?style=flat-square)](https://david-dm.org/paazmaya/gulp-sakugawa)
[![devDependency Status](https://img.shields.io/david-dm/paazmaya/gulp-sakugawa/dev-status.svg?style=flat-square)](https://david-dm.org/paazmaya/gulp-sakugawa#info=devDependencies)
[![Built with gulp](http://img.shields.io/badge/gulp-3.8-blue.svg?style=flat-square)](http://gulpjs.com/)

[Internet Explorer versions from 6 up to 9 come with a limitation][ieinternals] for
selectors present in a single CSS file. This limitation of 4095 selectors created the
need for CSS splitter, which might be the main use case of this task runner plugin.

Since IE8 and earlier, do not support media queries, but IE9 does, there is an option for handling
media queries differently, based on the targeted IE version. By separating media queries in
to a different file, it will allow the to include that CSS file [conditionally][] only when
IE9 is being used. Ideally this would reduce the amount of bytes downloaded by IE8, which
cannot handle the media queries anyhow, and thus prevent downloading something that is not
even used.

Internally this gulp task uses [Sakugawa][], thus in the case of any problems regarding the
resulting output or input handling, and also for any feature requests, please refer to the
[issues at Sakugawa project](https://github.com/paazmaya/sakugawa/issues "Issues for Sakugawa").


## Installation

```sh
npm install gulp-sakugawa --save-dev
```

```js
var gulpSakugawa = require('gulp-sakugawa');
```

## Usage

Example configuration against [Pure CSS](http://purecss.io/ "A set of small, responsive CSS modules that you can use in every web project"),
which results in two files, `pure-min_1.css` and `pure-min_2.css` in which the latter
contains all media queries.

```js
var gulp = require('gulp'),
  gulpSakugawa = require('gulp-sakugawa');

gulp.task('default', function() {
  gulp.src('pure-min.css')
    .pipe(gulpSakugawa({
      maxSelectors: 400,
      mediaQueries: 'separate',
      suffix: '_'
    }))
    .pipe(gulp.dest('.'));
});
```

The CSS file used in the example can be retrieved with:

```sh
wget http://yui.yahooapis.com/pure/0.5.0/pure-min.css
```

## Version history

* v0.2.0 (2014-11-19) First release, directly paired with Speed improvement release of Sakugawa

## License

Copyright (c) Juga Paazmaya <olavic@gmail.com>

Licensed under the [MIT license](LICENSE).


[Sakugawa]: https://github.com/paazmaya/sakugawa "CSS splitter, filter and organiser"
[ieinternals]: http://blogs.msdn.com/b/ieinternals/archive/2011/05/14/10164546.aspx "Stylesheet Limits in Internet Explorer"
[conditionally]: http://www.quirksmode.org/css/condcom.html "Conditional comments"
