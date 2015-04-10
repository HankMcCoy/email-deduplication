function generateEmails(numDistinct, numTotal) {
  var emailMap = {};
  var emailList, result;
  var numEmailsGenerated = 0;

  if (numTotal > 1000000)
    throw new Error('Cannot generate more than 1,000,000 emails.');

  while (numEmailsGenerated < numDistinct) {
    var randEmail = getRandEmail();
    if (!emailMap[randEmail]) {
      emailMap[randEmail] = true;
      numEmailsGenerated += 1;
    }
  }

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

function getRandEmail() {
  var randNum = Math.floor(Math.random()*100000000);

  return randNum + '@gmail.com';
}

function getRandLessThan(num) {
  return Math.floor(Math.random()*num);
}

module.exports = generateEmails;
