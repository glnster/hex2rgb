hex2rgb [![NPM](https://img.shields.io/npm/v/hex2rgb.svg)](https://www.npmjs.com/package/hex2rgb) [![Bower](https://img.shields.io/bower/v/hex2rgb.svg)](https://github.com/glnster/hex2rgb) ![Chai](https://img.shields.io/badge/chai-passing-brightgreen.svg)
=======


Converts hex color to rgb and calculates corresponding yiq foreground (either black or white).


## Example

For a dark hex color, hex2rgb will give you the rgb equivalent. It will also calculate and return an appropriate constrasting foreground (either 'black' or 'white').

Here's hex2rgb in action. Note the black or white text color (foreground) based on the background color.

![example.png](example.png)

## Installation

via NPM:

`npm install hex2rgb --save`

via Bower:

`bower install hex2rgb --save`

## Usage

### Using Bower

Include `hex2rgb.js` in your web app and use it as usual:

```js
<script src="hex2rgb.js"></script>
<script>
	hex2rgb('0033ff').rgb; // => [0, 51, 255]
	hex2rgb('0033ff').rgbString; // => 'rgb(0, 51, 255)'
</script>
```

### Using NodeJS

```js
var hex2rgb = require('hex2rgb');

var background,
	foreground,
	hex = '0033ff',
	shorthex = '03f',
	hashhex = '#0033ff',
	badhex = '00PS1E';

background = hex2rgb(hex).rgb; // => [0, 51, 255]
background = hex2rgb(hex).rgbString; // => 'rgb(0, 51, 255)'
background = hex2rgb(shorthex).rgb; // => [0, 51, 255]
background = hex2rgb(hashhex).rgb; // => [0, 51, 255]
foreground = hex2rgb(hex).yiq; // => white

// try with bad input and with debug on
background = hex2rgb(badhex, {debug: true}).rgb;
// logs "(hex2rgb) 00PS1E: Expected 3 or 6 HEX-ONLY chars. Returning defaults."
// Returns rgb [0,0,0] and yiq 'white' as fall-backs.


```

## API

### *hex2rgb( hex {String}, options {Object} )*

#### hex
A hex-only string of 3 or 6 characters. If the string has a # prefix, the # gets trimmed off.

#### {debug: true | false}

You can pass {debug:true} as a second argument to enable errors logged to console.

#### .rgb
Returns an array in `[r, g, b]` format. If the input is invalid `[0, 0, 0]` is returned as a fallback.

#### .rgbString
Returns a string in `rgb(r, g, b)` format. If the input is invalid `rgb(0,0,0)` is returned as a fallback.

#### .yiq
Returns a string of either `'white'` or `'black'`. If the input is invalid `'white'` is returned as a fallback.

## Tests

`npm test`

## Contributing

No formal styleguide, but please maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

## Thanks
- Brian Suda for his article, [Calculating Color Contrast](http://24ways.org/2010/calculating-color-contrast/), on 24 ways.
- Brent Ertz for his node module article, [Creating and publishing a node.js module](https://quickleft.com/blog/creating-and-publishing-a-node-js-module/).


## Release History
- 1.0.0 Add badges & update readme
- 0.8.0 Add rgbString property
- 0.6.0 - 0.7.0 Publish to Bower
- 0.2.0 - 0.5.0 Update description
- 0.1.0 Initial release