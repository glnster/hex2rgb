/**
 * hex2rgb
 * https://github.com/glnster/hex2rgb
 *
 * Copyright (c) 2015 Glenn Cueto
 * Licensed under the MIT license.
 *
 * Converts hex color to rgb. Calculates corresponding foreground.
 *
 * @param {string} hex - The hex color to be converted. Can be 3 or 6 HEX-ONLY chars.
 * Optional options object:
 * @param {boolean} debug - Default=false.
 * @param {string} rgbStringDefault - A default rgbString will return, e.g. "inherit" or "white" or "#e9e9e9".
 * @param {string} yiqDefault - A default yiq will return, e.g. "inherit" or "black" or "#333".
 * @return {array} rgb - [x,x,x] or default [255,255,255].
 * @return {string} rgbString - rgb(x,x,x). Defaults to 'inherit' or rgbStringDefault's value.
 * @return {string} yiq - 'black' or 'white' as a foreground color
 *                        against the given hex. Defaults to 'inherit' or yiqDefault's value.
 */

var hex2rgb = function(hex, options) {
  'use strict';

  // checks and defaults
  if (typeof hex !== 'string') {
    throw new TypeError('Expected a string');
  }

  hex = hex.replace(/^#/, '');

  options = options || {};
  options.debug = (typeof options.debug === 'boolean') ? options.debug : false;
  options.rgbStringDefault = (typeof options.rgbStringDefault === 'string') ? options.rgbStringDefault : 'inherit';
  options.yiqDefault = (typeof options.yiqDefault === 'string') ? options.yiqDefault : 'inherit';

  var hlen = hex.length,
    cleanHex,
    RGB = [255, 255, 255],
    rgbString = options.rgbStringDefault,
    yiqres = options.yiqDefault;

  // expand hex input
  if (hlen === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  // check for hex-only chars
  cleanHex = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (cleanHex !== null) {
    var num = parseInt(cleanHex, 16);
    RGB = [num >> 16, num >> 8 & 255, num & 255];
    rgbString = 'rgb(' + RGB[0] + ', ' + RGB[1] + ', ' + RGB[2] + ')';

    var yiq = ((RGB[0] * 299) + (RGB[1] * 587) + (RGB[2] * 114)) / 1000;
    yiqres = (yiq >= 128 || isNaN(yiq)) ? 'black' : 'white';

  } else if (options.debug === true) {
    console.error('(hex2rgb) ' + hex + ': Expected 3 or 6 HEX-ONLY chars. Returning defaults.');
  }

  return {
    rgb: RGB,
    rgbString: rgbString,
    yiq: yiqres
  };

};

module.exports = hex2rgb;