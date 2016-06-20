# output-formatter


[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]


format helper for output


```js
const fmt = require('output-formatter');
```


## fmt.left(str, len)


```js
fmt.left('hello', 10).should.equal('hello     ');
fmt.left('hello', 5).should.equal('hello');
fmt.left('hello', 2).should.equal('hello');
fmt.left(234, 5).should.equal('234  ');
fmt.left(null, 5).should.equal('null ');
```


## fmt.center(str, len)


```js
fmt.center('hi', 10).should.be.equal('    hi    ');
fmt.center('hi', 9).should.be.equal('   hi    ');
fmt.center('hi', 2).should.be.equal('hi');
fmt.center('hi', 1).should.be.equal('hi');
fmt.center(0, 5).should.equal('  0  ');
fmt.center(undefined, 5).should.equal('undefined');
```


## fmt.right(str, len)


```js
fmt.right('world', 10).should.be.equal('     world');
fmt.right('world', 5).should.be.equal('world');
fmt.right('world', 1).should.be.equal('world');
fmt.right(true, 1).should.equal('true');
```


## fmt.line(ch, num)


```js
fmt.line('-', 5).should.be.equal('-----');
fmt.line('+', 0).should.be.equal('');
```

## fmt.red(msg)


```js
console.log(fmt.red('hello world'));

```


## fmt.yellow(msg)


```js
console.log(fmt.yellow('warning'));
```


[npm-image]: https://img.shields.io/npm/v/output-formatter.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/output-formatter
[travis-image]: https://img.shields.io/travis/bencode/output-formatter/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/bencode/output-formatter
[coveralls-image]: https://img.shields.io/codecov/c/github/bencode/output-formatter.svg?style=flat-square
[coveralls-url]: https://codecov.io/github/bencode/output-formatter?branch=master
