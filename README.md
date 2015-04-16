hex2rgb
=======

Converts hex color to rgb. Calculates corresponding yiq (either black or white).


## Example

For a dark hex color, hex2rgb will give you the rgb equivalent. It will also calculate an appropriate constrasting foreground and return either 'black' or 'white'.

Here's hex2rgb in action in one of my prototype projects. Note the black or white text color (foreground) based on the background color.

![example.png](example.png)

## Installation

`npm install hex2rgb --save`

## Usage

Takes a hex-only string of 3 or 6 characters. A # prefix is optional and gets trimmed off.

Optionally, you can pass {debug:true} as the second argument. For illegal string input it will return [0,0,0] for rgb and 'white' for yiq, as fall-backs.

```javascript
var hex2rgb = require('hex2rgb'),
   background,
   foreground;

var hex = '0033ff',
	shorthex = '03f',
	hashhex = '#0033ff',
    badhex = '00PS1E';

background = hex2rgb(hex).rgb; // => [0, 51, 255]
background = hex2rgb(shorthex).rgb; // => [0, 51, 255]
background = hex2rgb(hashhex).rgb; // => [0, 51, 255]
foreground = hex2rgb(hex).yiq; // => white

// try with bad input and with debug on
background = hex2rgb(badhex, {debug: true}).rgb;
// logs "(hex2rgb) 00PS1E: Expected 3 or 6 HEX-ONLY chars. Returning defaults."
// Returns rgb [0,0,0] and yiq 'white' as fall-backs.


```

## Tests

`npm test`

## Contributing

No formal styleguide, but please maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

## Thanks
Thanks to Brent Ertz for his node module article, [Creating and publishing a node.js module](https://quickleft.com/blog/creating-and-publishing-a-node-js-module/)


## Release History

- 0.1.0 Initial release