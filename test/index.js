var expect = require('chai').expect,
    hex2rgb = require('../index');

var tests = ['0033ff', '345', '#', '#0033ff', 'p033ff', ''];

describe('#rgb', function () {
  it('returns rgb array [0, 51, 255] from hex input 0033ff', function() {
    expect(hex2rgb('0033ff').rgb).to.eql([0, 51, 255]);
  });

  it('returns [0,51,255] from hex 03f', function() {
    expect(hex2rgb('03f').rgb).to.eql([0,51,255]);
  });

  it('throws a TypeError for null', function() {
    expect(function(){
      hex2rgb();
    }).to.throw(TypeError);
  });
});

describe('#yiq', function() {
  it('returns white for hex 0033ff', function() {
    expect(hex2rgb('0033ff').yiq).to.equal('white');
  });
});

