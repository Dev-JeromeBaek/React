import * as React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="/logo.svg" className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {this.props.children}
        </p>
      </div>
    );
  }
}

export default App;
