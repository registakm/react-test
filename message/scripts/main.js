var App = React.createClass({
  getInitialState: function() {
    return { message: '' }
  },
  updateMessage: function(e) {
    this.setState({ message: e.target.value });
  },
  render: function() {
    return (
      <div>
        <input type="text" onChange={this.updateMessage} />
        <Message message={this.state.message} />
      </div>
    )
  }
});

var Message = React.createClass({
  render: function() {
    return <p>{this.props.message}</p>
  }
});

React.render(
  <App />,
  document.getElementById('app-container')
)
