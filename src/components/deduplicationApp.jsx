var React = require('react');
var generateEmails = require('../lib/generateEmails');
var removeDuplicates = require('../lib/removeDuplicates');

var DeduplicationApp = React.createClass({
  getInitialState: function () {
    return {
      numUniqueEmails: 5,
      numDuplicateEmails: 3,
      allEmails: [],
      dedupedEmails: [],
      runtime: ''
    };
  },
  render: function () {
    var allEmails = getListForDisplay(this.state.allEmails);
    var dedupedEmails = getListForDisplay(this.state.dedupedEmails);
    var displayRuntime = this.state.runtime && this.state.runtime.toFixed(2);

    return (
      <div className="deduplication-app">
        <div>
          {'Generate '}
          <input type="text"
            value={this.state.numUniqueEmails}
            onChange={this.handleUniqueEmailsChange} />
          {' unique emails with '}
          <input type="text"
            value={this.state.numDuplicateEmails}
            onChange={this.handleDuplicateEmailsChange}/>
          {' duplicates'}
        </div>
        <button onClick={this.generateEmails}>Generate emails</button>
        <label>Emails with duplicates</label>
        <textarea readOnly="true"
          value={allEmails} />
        <button onClick={this.removeDuplicates}>Remove duplicates</button>
        <label>
          Results {displayRuntime && '(' + displayRuntime + ' ms)'}
        </label>
        <textarea readOnly="true"
          value={dedupedEmails} />
      </div>
    );
  },
  handleUniqueEmailsChange: function (e) {
    this.updateEmailCount('numUniqueEmails', e.target.value);
  },
  handleDuplicateEmailsChange: function (e) {
    this.updateEmailCount('numDuplicateEmails', e.target.value);
  },
  updateEmailCount: function (type, strValue) {
    var val = Math.min(parseInt(strValue, 10), 50000);
    this.setState({
      [type]: isNaN(val) ? strValue : val
    });
  },
  generateEmails: function () {
    var numUniqueEmails = this.state.numUniqueEmails;
    var numDuplicateEmails = this.state.numDuplicateEmails;

    if (!isNaN(numUniqueEmails) && !isNaN(numDuplicateEmails)) {
      this.setState({
        allEmails: generateEmails(numUniqueEmails, numUniqueEmails + numDuplicateEmails)
      });
    }
  },
  removeDuplicates: function () {
    var startTime = performance.now();
    var dedupedEmails = removeDuplicates(this.state.allEmails);
    var runtime = performance.now() - startTime;

    this.setState({
      dedupedEmails: dedupedEmails,
      runtime: runtime
    });
  }
});

function getListForDisplay(arr) {
  var limitedList = arr.slice(0, 100);
  if (limitedList.length < arr.length)
    limitedList.push('And ' + (arr.length - limitedList.length) + ' more');

  return limitedList.join('\n');
}

module.exports = DeduplicationApp;
