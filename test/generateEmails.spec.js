var _ = require('lodash');
var assert = require('assert');
var generateEmails = require('../src/lib/generateEmails');

describe('generateEmails', function () {
  var emails = generateEmails(1000, 2000);

  it('should generate the specified number of unique emails', function () {
    assert.equal(1000, _.unique(emails).length);
  });

  it('should generate the specified number of total emails', function () {
    assert.equal(2000, emails.length);
  });
});
