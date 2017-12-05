import * as React from 'react';
import './App.css';

export interface AppProps {
  name: string;
}

export interface AppState {
  age: number;
  company: string;
}

class App extends React.Component<AppProps, AppState> {
  private _interval: number;

  constructor(props: AppProps) {
    console.log('App constructor');
    super(props);
    this.state = {
      age: 35,
      company: 'Studio XID'
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
    console.log('App render');
    return (
      <div>
        <h2>Hello {this.props.name} - {this.state.age}</h2>
        <button onClick={this._reset}>리셋</button>
        <input type="text" onChange={this._change} value={this.state.company} />
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
      company: e.target.value
    });
  }
}

export default App;