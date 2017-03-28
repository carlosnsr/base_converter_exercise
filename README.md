# Exercise: Write a Base Converter

Your task is to write a function that converts from one base to another base.

The function will take:
  - a input string, representing the number/string to convert
  - a source string, containing the alphabet that the input string is written in (e.g. binary)
  - a target string, containing the alphabet that the output string should be written in (e.g. hexademical)

The function should output:
  - a string, that has the same value as the input string, but in the target alphabet

Example alphabets that could be used for the source and target strings can be found in [the test file](test/base_conversion-spec.js)

e.g.

```js
   base_conversion-spec.js('1111', Alphabet.BINARY, Alphabet.HEXADECIMAL)  // should return 'F'
   base_conversion-spec.js('1111', Alphabet.BINARY, Alphabet.DECIMAL)  // should return '15'
```

## Install and Get Started

```
# fork and clone then...
npm install
npm test
```

Code your answer in the provided function stub in the provided [source file](src/base_conversion.js)

Let the tests guide you.  Solve one at a time, starting with converting small binary values into decimal.
