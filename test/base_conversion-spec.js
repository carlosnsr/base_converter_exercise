const assert = require('chai').assert
const convert = require('../src/base_conversion.js')

var Alphabet = {
  BINARY:        '01',
  OCTAL:         '01234567',
  DECIMAL:       '0123456789',
  HEXA_DECIMAL:  '0123456789abcdef',
  ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

describe('example tests', function() {
  var bin = Alphabet.BINARY,
    oct = Alphabet.OCTAL,
    dec = Alphabet.DECIMAL,
    hex = Alphabet.HEXA_DECIMAL,

    allow = Alphabet.ALPHA_LOWER,
    alup = Alphabet.ALPHA_UPPER,
    alpha = Alphabet.ALPHA,
    alnum = Alphabet.ALPHA_NUMERIC;

  it ('should convert bin to dec', function() {
    assert.equal(convert("0", bin, dec), "0")
    assert.equal(convert("1", bin, dec), "1")
    assert.equal(convert("10", bin, dec), "2")
    assert.equal(convert("0111", bin, dec), "7")
    assert.equal(convert("1001", bin, dec), "9")
    assert.equal(convert("1111", bin, dec), "15")
  })

  it('should convert between numeral systems', function() {
    assert.deepEqual(convert("15", dec, bin), '1111', '"15" dec -> bin');
    assert.deepEqual(convert("15", dec, oct), '17', '"15" dec -> oct');
    assert.deepEqual(convert("1010", bin, dec), '10', '"1010" bin -> dec');
    assert.deepEqual(convert("1010", bin, hex), 'a', '"1010" bin -> hex');
  });

  it('should convert between other bases', function() {
    assert.deepEqual(convert("0", dec, alpha), 'a', '"0" dec -> alpha');
    assert.deepEqual(convert("27", dec, allow), 'bb', '"27" dec -> alpha_lower');
    assert.deepEqual(convert("hello", allow, hex), '320048', '"hello" alpha_lower -> hex')
    assert.deepEqual(convert("SAME", alup, alup), 'SAME', '"SAME" alpha_upper -> alpha_upper');
  });
});
