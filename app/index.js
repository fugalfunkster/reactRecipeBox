var React = require('react');
var ReactDOM = require('react-dom');

const App = React.createClass({
  render: function () {
    return (
      <div>Hello World!</div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
