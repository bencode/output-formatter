'use strict';


const fmt = require('..');


describe('output-formatter - format string for output', function() {
  it('.left(str, len)', function() {
    fmt.left('hello', 10).should.be.equal('hello     ');
    fmt.left('hello', 5).should.be.equal('hello');
    fmt.left('hello', 2).should.be.equal('hello');
  });
});
