import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

export interface AppProps {
  name: string;
  company?: string;
}

export interface AppState {
  age: number;
  company_state: string;
}

class App extends React.Component<AppProps, AppState> {
  static defaultProps = {
    company: 'Studio XID'
  };

  private _interval: number;

  constructor(props: AppProps) {
    console.log('App constructor');
    super(props);
    this.state = {
      age: 35,
      company_state: 'Studio XID'
    };
    this._reset = this._reset.bind(this);
    this._change = this._change.bind(this);
  }

  componentWillMount() {
    console.log('App componentWillMount');
  }

  componentDidMount() {
    console.log('App componentDidMount');
    this._interval = window.setInterval(
      () => {
        this.setState({
          age: this.state.age + 1
        });
      },
      1000
    );
  }

  componentWillUnmount() {
    console.log('App componentWillUnmount');
    clearInterval(this._interval);
  }

  componentWillReceiveProps(nextProps: AppProps) {
    console.log(`App componentWillReceiveProps : ${JSON.stringify(nextProps)}`);
  }

  shouldComponentUpdate(nextProps: AppProps, nextState: AppState): boolean {
    console.log(`App shouldComponentUpdate : ${JSON.stringify(nextProps)}, ${JSON.stringify(nextState)}`);
    return true;
  }

  componentWillUpdate(nextProps: AppProps, nextState: AppState) {
    console.log(`App componentWillUpdate : ${JSON.stringify(nextProps)}, ${JSON.stringify(nextState)}`);
  }

  componentDidUpdate(prevProps: AppProps, prevState: AppState) {
    console.log(`App componentDidUpdate : ${JSON.stringify(prevProps)}, ${JSON.stringify(prevState)}`);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.name}, {this.state.age}</h2>
          
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <StatelessComponent name="Baek">나는 JeromeBaek이다.</StatelessComponent>
        </div>
        <div>
          <h2>Hello {this.props.name}, {this.props.company}, {this.state.age}</h2>
          <button onClick={this._reset}>회춘</button>
          <input type="text" onChange={this._change} value={this.state.company_state} />
        </div>
      </div>
    );
  }

  private _reset(): void {
    this.setState({
      age: 35
    });
  }

  private _change(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      company_state: e.target.value
    });
  }
}

const StatelessComponent: React.SFC<AppProps> = ({name, company = 'Home2', children}) => {
  return (
    <h2>{name}, {company}, {children}</h2>
  );
};

// function 사용법 #1
/*
StatelessComponent.defaultProps = {
  company: 'Home'
};
*/

export default App;
