var expect = require('chai').expect,
    hex2rgb = require('../index');

describe('#rgb', function () {
  it('returns rgb array [0, 51, 255] from hex input 0033ff', function() {
    expect(hex2rgb('0033ff').rgb).to.eql([0, 51, 255]);
  });

  it('returns [0,51,255] from hex 03f', function() {
    expect(hex2rgb('03f').rgb).to.eql([0,51,255]);
  });

  it('throws a TypeError for null input', function() {
    expect(function(){
      hex2rgb();
    }).to.throw(TypeError);
  });

  it('removes a # prepended from input', function() {
    expect(hex2rgb('#0033ff').rgb).to.eql([0,51,255]);
  });

  it('returns default [0, 0, 0] for non-hex (bad) input', function() {
    expect(hex2rgb('p033ff').rgb).to.eql([0,0,0]);
  });
});



describe('#yiq', function() {
  it('returns white for dark hex 0033ff', function() {
    expect(hex2rgb('0033ff').yiq).to.equal('white');
  });

  it('returns black for light hex ff88ee', function() {
    expect(hex2rgb('ff88ee').yiq).to.equal('black');
  });

    it('returns default white for non-hex (bad) input', function() {
    expect(hex2rgb('p033ff').yiq).to.equal('white');
  });
});



describe('#options', function() {
  it("console log's a string error when {debug: true}", function() {
    expect(hex2rgb('p033ff', {debug: true}).rgb).to.eql([0,0,0]);
  });
});