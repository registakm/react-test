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
        <p>{this.state.message}</p>
      </div>
    )
  }
});

React.render(
  <App />,
  document.getElementById('app-container')
)
