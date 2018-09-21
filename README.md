@deskpro/js-utils
==============
Library of common js methods

[![Build Status](https://travis-ci.org/deskpro/js-utils.svg?branch=master)](https://travis-ci.org/deskpro/js-utils)
[![Coverage Status](https://coveralls.io/repos/github/deskpro/js-utils/badge.svg?branch=master)](https://coveralls.io/github/deskpro/js-utils?branch=master)
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://github.com/deskpro/js-utils/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/@deskpro/js-utils.svg?style=flat)](https://www.npmjs.com/package/@deskpro/js-utils)

## Installation

The easiest way to use `js-utils` is to install it from npm and build it into your app with Webpack.

```
npm i @deskpro/js-utils --save
```

* [Utilities](#utilities)
  * [Numbers](#numbers)
  * [Objects](#objects)
  
## Utilities

* [newid](docs/newid.md)  
  Generates a unique id value.
* [noop](docs/noop.md)  
  Provides an empty function to use as a default callback.
  
### Numbers
* [numbers/numberFormat](docs/numbers/number_format.md)  
  Formats a number to include commas (or any separator) in the thousandths place.
* [numbers/numberRandom](docs/numbers/number_random.md)  
  Returns a random whole number between a minimum and maximum number.
* [numbers/formatFileSize](docs/numbers/format_file_size.md)  
  Format a file size into a human readable string

### Objects
* [objects/objectKeyFilter](docs/objects/object_key_filter.md)  
  Performs a key comparison between two objects, deleting from the first where the keys exist in the second.
* [objects/objectForEach](docs/objects/object_foreach.md)  
  Iterates over an object.
* [objects/objectMap](docs/objects/object_map.md)  
  Creates an array from the results of calling a function on each item in an object.

### Strings
* [strings/trimString](docs/strings/trim_string.md)  
  Trim a string to a certain length with an ellipsis
