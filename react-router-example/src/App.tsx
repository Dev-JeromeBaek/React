import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,  NavLink } from 'react-router-dom';
import { RouteComponentProps, Switch, Redirect } from 'react-router';

const logo = require('./logo.svg');
const Home = () => {
  return (
    <h3>Home</h3>
  );
};

const Post = (props: RouteComponentProps<{ postId: string }>) => {
  function goNextPost() {
    const nextPostId = +props.match.params.postId + 1;  // params는 항상 'string'으로 반환 되니 형변환.
    props.history.push(`/posts/${nextPostId}`);
  }

  return (
    <div>
      <h3>Post {props.match.params.postId}</h3>
      <button onClick={goNextPost}>Next post</button>
      <p>{new URLSearchParams(props.location.search).get('body')}</p>
    </div>
  );
};

const PostList = (props: RouteComponentProps<{}>) => {
  return (
    <div>
      <Route exact={true} path={`${props.match.url}`} render={() => <h3>PostList</h3>} />
      <Route path={`${props.match.url}/:postId`} component={Post} />
    </div>
  );
};

const NotFound = () => {
  return (
    <h3>Not Found!!!</h3>
  );
};

const Admin = () => {
  // isAdmin이 true인 경우만 rendering을 하고 아닌 경우 redirect 할 것임.
  const isAdmin = /*false*/ true; // 임의로 설정
  return isAdmin
    ? <h3>Admin</h3>
    : <Redirect to="/" />;
};

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <nav>
            <ul>
              <li><NavLink exact={true} activeStyle={ { fontSize:24 }} to="/">Home</NavLink></li>
              <li><NavLink activeStyle={ { fontSize:24 }} to="/intro">소개</NavLink></li>
              <li><NavLink activeStyle={ { fontSize:24 }} to="/admin">Admin</NavLink></li>
            </ul>
          </nav>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/intro" render={() => <h3>소개</h3>} />
            <Redirect from="/about" to="/intro" />
            <Route path="/posts" component={PostList} />
            <Route path="/admin" component={Admin} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
