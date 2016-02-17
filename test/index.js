'use strict';


const fmt = require('..');


describe('output-formatter - format string for output', function() {
  it('.left(str, len)', function() {
    fmt.left('hello', 10).should.be.equal('hello     ');
    fmt.left('hello', 5).should.be.equal('hello');
    fmt.left('hello', 2).should.be.equal('hello');
  });


  it('.center(str, len)', function() {
    fmt.center('hi', 10).should.be.equal('    hi    ');
    fmt.center('hi', 9).should.be.equal('   hi    ');
    fmt.center('hi', 2).should.be.equal('hi');
    fmt.center('hi', 1).should.be.equal('hi');
  });


  it('.right(str, len)', function() {
    fmt.right('world', 10).should.be.equal('     world');
    fmt.right('world', 5).should.be.equal('world');
    fmt.right('world', 1).should.be.equal('world');
  });


  it('.line(ch, num)', function() {
    fmt.line('-', 5).should.be.equal('-----');
    fmt.line('+', 0).should.be.equal('');
  });


  it('.red(msg)', function() {
    const line = fmt.red('hello world');
    line.should.be.equal('\u001b[31mhello world\u001b[39m');
    console.log(line);    // eslint-disable-line
  });


  it('.yellow(msg)', function() {
    const line = fmt.yellow('warnning');
    line.should.be.equal('\u001b[33mwarnning\u001b[39m');
    console.log(line);    // eslint-disable-line
  });
});
