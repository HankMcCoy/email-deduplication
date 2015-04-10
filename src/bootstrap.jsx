require('./styles/main.styl');

var React = require('react');
var DeduplicationApp = require('./components/deduplicationApp');

[].forEach.call(document.querySelectorAll('.deduplication-app-container'), el => {
  React.render(<DeduplicationApp />, el);
});
