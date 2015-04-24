var expect = require('chai').expect,
    hex2rgb = require('../index');

describe('#rgb', function () {
  it('returns rgb array [0, 51, 255] from hex input 0033ff', function() {
    expect(hex2rgb('0033ff').rgb).to.eql([0, 51, 255]);
  });

  it('returns [0,51,255] from hex 03f', function() {
    expect(hex2rgb('03f').rgb).to.eql([0,51,255]);
  });

  it('returns [0, 0, 0] from hex 000000', function() {
    expect(hex2rgb('000000').rgb).to.eql([0, 0, 0]);
  });

  it('throws a TypeError for null input', function() {
    expect(function(){
      hex2rgb();
    }).to.throw(TypeError);
  });

  it('removes a # prepended from input', function() {
    expect(hex2rgb('#0033ff').rgb).to.eql([0,51,255]);
  });

  it('returns default [255, 255, 255] for non-hex (invalid) input', function() {
    expect(hex2rgb('00PS1E').rgb).to.eql([255, 255, 255]);
  });
});

describe('#rgbString', function () {
  it("returns 'rgb(0, 51, 255)' from hex input 0033ff", function() {
    expect(hex2rgb('0033ff').rgbString).to.equal('rgb(0, 51, 255)');
  });

  it("returns 'inherit' from invalid input", function() {
    expect(hex2rgb('00PS1E').rgbString).to.equal('inherit');
  });
});


describe('#yiq', function() {
  it('returns white for dark hex 0033ff', function() {
    expect(hex2rgb('0033ff').yiq).to.equal('white');
  });

  it('returns black for light hex ff88ee', function() {
    expect(hex2rgb('ff88ee').yiq).to.equal('black');
  });

  it("returns 'inherit' for non-hex (invalid) input", function() {
    expect(hex2rgb('00PS1E').yiq).to.equal('inherit');
  });
});



describe('#options', function() {
  describe('\n    #rgbStringDefault: set as rgbString fallback for when hex is invalid', function () {
    it('rgbString returns "#e9e9e9" as fallback when {rgbStringDefault: "#e9e9e9"}', function() {
      expect(hex2rgb('', {rgbStringDefault:'#e9e9e9'}).rgbString).to.equal('#e9e9e9');
    });

    it('rgbString returns "black" as fallback when {rgbStringDefault: "black"}', function() {
      expect(hex2rgb('', {rgbStringDefault:'black'}).rgbString).to.equal('black');
    });

    it('rgbString returns "inherit" as fallback when {rgbStringDefault} value is not a string', function() {
      expect(hex2rgb('', {rgbStringDefault:111222}).rgbString).to.equal('inherit');
    });
  });

  describe('\n    #yiqDefault: set as yiq fallback for when hex is invalid', function () {
    it('yiq returns "#333333" as fallback when {yiqDefault: "#333333"}', function() {
      expect(hex2rgb('', {yiqDefault:'#333333'}).yiq).to.equal('#333333');
    });

    it('yiq returns "white" as fallback when {yiqDefault: "white"}', function() {
      expect(hex2rgb('', {yiqDefault:'white'}).yiq).to.equal('white');
    });

    it('yiq returns "inherit" as fallback when {yiqDefault} value is not a string', function() {
      expect(hex2rgb('', {yiqDefault:[111,222]}).yiq).to.equal('inherit');
    });
  });

  describe('\n    #debug', function () {
    it("console log's a string error when {debug: true}", function() {
      expect(hex2rgb('00PS1E', {debug: true}).rgb).to.eql([255, 255, 255]);
    });
  });
});
