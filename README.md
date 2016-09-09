# gulp-sakugawa (グルプ佐久川)

> Run [`sakugawa`][sakugawa] via [gulp](http://gulpjs.com/ "The streaming build system"),
> for CSS splitting, filtering and organising.

![Mr Sakugawa enjoying the taste of gulp](./logo.png)

[![Analytics](https://ga-beacon.appspot.com/UA-2643697-15/gulp-sakugawa/index?flat)](https://github.com/igrigorik/ga-beacon)
[![Dependency Status](https://img.shields.io/david/paazmaya/gulp-sakugawa.svg?style=flat-square)](https://david-dm.org/paazmaya/gulp-sakugawa)
[![devDependency Status](https://img.shields.io/david/dev/paazmaya/gulp-sakugawa.svg?style=flat-square)](https://david-dm.org/paazmaya/gulp-sakugawa#info=devDependencies)
[![wercker status](https://app.wercker.com/status/ece6b1297280d99cb32271fc8c1daf5b/s "wercker status")](https://app.wercker.com/project/bykey/ece6b1297280d99cb32271fc8c1daf5b)
[![Windows build status](https://ci.appveyor.com/api/projects/status/paau5nxur49cx2ei/branch/master?svg=true)](https://ci.appveyor.com/project/paazmaya/gulp-sakugawa/branch/master)
[![codecov](https://codecov.io/gh/paazmaya/gulp-sakugawa/branch/master/graph/badge.svg)](https://codecov.io/gh/paazmaya/gulp-sakugawa)
[![Built with gulp](http://img.shields.io/badge/gulp-3.9-blue.svg?style=flat-square)](http://gulpjs.com/)

[Internet Explorer versions from 6 up to 9 come with a limitation][ieinternals] for
selectors present in a single CSS file. This limitation of 4095 selectors created the
need for CSS splitter, which might be the main use case of this task runner plugin.

Since IE8 and earlier, do not support media queries, but IE9 does, there is an option for handling
media queries differently, based on the targeted IE version. By separating media queries in
to a different file, it will allow the to include that CSS file [conditionally][] only when
IE9 is being used. Ideally this would reduce the amount of bytes downloaded by IE8, which
cannot handle the media queries anyhow, and thus prevent downloading something that is not
even used.

Internally this gulp task uses [`sakugawa`][sakugawa], thus in the case of any problems regarding the
resulting output or input handling, and also for any feature requests, please refer to the
[issues at Sakugawa project](https://github.com/paazmaya/sakugawa/issues "Issues for Sakugawa").


## Installation

Please note that Node.js version minimum of `4.2.0` is required to use this plugin.

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

## Contributing

["A Beginner's Guide to Open Source: The Best Advice for Making your First Contribution"](http://hf.heidilabs.com/blog/a-beginners-guide-to-open-source-making-your-first-contribution).

[Also there is a blog post about "45 Github Issues Dos and Don’ts"](https://davidwalsh.name/45-github-issues-dos-donts).

Linting is done with [ESLint](http://eslint.org) and can be executed with `npm run lint`.
There should be no errors appearing after any JavaScript file changes.

## Version history

* `v0.5.1` (2016-08-24)
  - Better type checking of options
  - Update dependencies
  - Start testing in Windows at AppVeyor
* `v0.5.0` (2016-05-13)
  - Minimum supported version of Node.js is `4.2.0` (LTS)
  - ESLint 2 and shared configuration #15
  - Minimum supported `sakugawa` is `v0.5.0`
* `v0.4.1` (2015-09-03)
  - Output filenames were not as documented, fixed via #10
* `v0.4.0` (2015-03-11)
  - Update Sakugawa to `v0.4.0` which preserves existing `@charset` rules to all resulting files
* `v0.3.0` (2015-02-23)
  - Update Sakugawa to `v0.3.0` which adds the `minSheets` option
* `v0.2.0` (2014-11-19)
  - First release, directly paired with Speed improvement release of Sakugawa

## License

Copyright (c) [Juga Paazmaya](https://paazmaya.fi) <paazmaya@yahoo.com>

Licensed under the [MIT license](LICENSE).


[Sakugawa]: https://github.com/paazmaya/sakugawa "CSS splitter, filter and organiser"
[ieinternals]: http://blogs.msdn.com/b/ieinternals/archive/2011/05/14/10164546.aspx "Stylesheet Limits in Internet Explorer"
[conditionally]: http://www.quirksmode.org/css/condcom.html "Conditional comments"
