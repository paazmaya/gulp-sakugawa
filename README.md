# gulp-sakugawa (グルプ佐久川)

> Run [Sakugawa](https://github.com/paazmaya/sakugawa "CSS splitter, filter and organiser")
> via [gulp](http://gulpjs.com/ "The streaming build system"), for CSS splitting, filtering and organising.

![Mr Sakugawa enjoying the taste of gulp](./logo.png)
[![Analytics](https://ga-beacon.appspot.com/UA-2643697-15/gulp-sakugawa/index)](https://github.com/igrigorik/ga-beacon)
[![Dependency Status](https://david-dm.org/paazmaya/gulp-sakugawa.svg)](https://david-dm.org/paazmaya/gulp-sakugawa)
[![devDependency Status](https://david-dm.org/paazmaya/gulp-sakugawa/dev-status.svg)](https://david-dm.org/paazmaya/gulp-sakugawa#info=devDependencies)


## Installation

```shell
npm install gulp-sakugawa --save-dev
```

```js
var gulpSakugawa = require('gulp-sakugawa');
```

## Usage

Example configuration against [Pure CSS](http://purecss.io/ "A set of small, responsive CSS modules that you can use in every web project"),
which results in two files, `pure-min_1.css` and `pure-min_2.css` in which the latter
contains all media queries.


The CSS file used in the example can be retrieved with:

```sh
wget http://yui.yahooapis.com/pure/0.5.0/pure-min.css
```

## Version history

None yet..

## License

Copyright (c) Juga Paazmaya <olavic@gmail.com>

Licensed under the [MIT license](LICENSE).
