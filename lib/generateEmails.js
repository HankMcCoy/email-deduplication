var Chance = require('chance');
var chance = new Chance();

function generateEmails(numDistinct, numTotal) {
  var emailMap = {};
  var emailList, result;
  var randInsertionIdx, randEmailIdx;

  while (Object.keys(emailMap).length < numDistinct)
    emailMap[chance.email()] = true;

  emailList = Object.keys(emailMap);
  result = emailList.slice(0);

  while (result.length < numTotal) {
    result.splice(
      getRandLessThan(result.length + 1),
      0,
      emailList[getRandLessThan(emailList.length)]
    );
  }

  return result;
}

function getRandLessThan(num) {
  return chance.integer({ min: 0, max: num });
}

module.exports = generateEmails;
