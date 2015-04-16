/**
 * hex2rgb
 * https://github.com/glnster/hex2rgb
 *
 * Copyright (c) 2015 Glenn Cueto
 * Licensed under the MIT license.
 *
 * Converts hex color to rgb. Calculates corresponding yiq.
 *
 * @param {string} hex - The hex color to be converted. Can be 3 or 6 HEX-ONLY chars.
 * @param {boolean} debug - Optional. Default=false.
 * @param {string} darkyiq, lightyiq - Optional foreground colors.
 * @return {array} rgb - [x,x,x] or default [0,0,0].
 * @return {string} yiq - Default 'black' or 'white' as a foreground color
 *                        against the given hex.
 */

var hex2rgb = function(hex, options) {
  "use strict";

  // checks and defaults
  if (typeof hex !== 'string') {
    throw new TypeError('Expected a string');
  }

  hex = hex.replace(/^#/, '');
  var hlen = hex.length,
    cleanHex,
    RGB = [0, 0, 0],
    yiqres;
  options = options || {};
  options.debug = options.debug || false;
  options.darkyiq = options.darkyiq || 'black';
  options.lightyiq = options.lightyiq || 'white';
  yiqres = options.lightyiq;

  // expand hex input
  if (hlen === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  // check for hex-only chars
  cleanHex = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (cleanHex !== null) {
    var num = parseInt(cleanHex, 16);
    RGB = [num >> 16, num >> 8 & 255, num & 255];

    var yiq = ((RGB[0] * 299) + (RGB[1] * 587) + (RGB[2] * 114)) / 1000;
    yiqres = (yiq >= 128 || isNaN(yiq)) ? options.darkyiq : options.lightyiq;

  } else if (options.debug === true) {
    console.error("Expected 3 or 6 HEX-ONLY chars. Returning defaults.");
  }

  return {
    rgb: RGB,
    yiq: yiqres
  };


});

module.exports = hex2rgb;