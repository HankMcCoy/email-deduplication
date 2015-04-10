var _ = require('lodash');
var assert = require('assert');
var generateEmails = require('../src/lib/generateEmails');
var removeDuplicates = require('../src/lib/removeDuplicates');

describe('removeDuplicates', function () {
  var listWithDuplicates = generateEmails(50000, 100000);
  var startTime = process.hrtime();
  var result = removeDuplicates(listWithDuplicates);
  var timeSpent = process.hrtime(startTime);
  var uniqueEmails = _.unique(listWithDuplicates);

  it('should remove duplicates', function () {
    assert.deepEqual(uniqueEmails, result);
  });

  it('should take less than a second', function () {
    assert.equal(0, timeSpent[0]);
  });
});
