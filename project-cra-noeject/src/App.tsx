import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

export interface AppProps {
  name: string;
}

interface AppState {
  age: number;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      age: 27
    };
    setInterval(() => {
      this.setState({
        age: this.state.age + 1
      });
    }, 2000);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.name}, {this.state.age}</h2>
          <StatelessComponent name="Baek">나는 JeromeBaek이다.</StatelessComponent>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

const StatelessComponent: React.SFC<AppProps> = (props) => {
  return (
    <h2>{props.name} {props.children}</h2>
  );
};

export default App;
