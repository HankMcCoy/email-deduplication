var assert = require('assert');
var removeDuplicates = require('../lib/removeDuplicates').fast;

describe('removeDuplicates', function () {
  var listWithDuplicates = ['a', 'b', 'a', 'c', 'b', 'c'];
  var startTime = process.hrtime();
  var result = removeDuplicates(listWithDuplicates);
  var timeSpent = process.hrtime(startTime);

  it('should remove duplicates', function () {
    assert.deepEqual(['a', 'b', 'c'], result);
  });

  it('should take less than a second', function () {
    assert.equal(0, timeSpent[0]);
  });
});
