function removeDuplicates(emails) {
  var emailsSeen = {};
  var resultIdx = 0;
  var i, curEmail;

  // Allocate a large enough result array to handle the case where every
  // email is unique.
  var result = new Array(emails.length);

  for (i = 0; i < emails.length; i++) {
    curEmail = emails[i];

    if (!emailsSeen[curEmail]) {
      emailsSeen[curEmail] = true;

      result[resultIdx] = curEmail;
      resultIdx += 1;
    }
  }

  // If every email was not unique there will be leftover space in the
  // array. Clean it up here.
  result = result.filter(function (email) {
    return email !== undefined;
  });

  return result;
}

module.exports = removeDuplicates;
