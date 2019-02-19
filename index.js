import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useReactRouter from 'use-react-router';

function Hello() {
  const { history, location, match } = useReactRouter();
  return (
    <div>
      <h1>HelloWorld</h1>
      <p>{`pathname: ${location.pathname}`}</p>
      <button onClick={() => history.push('/react')}>Next</button>
    </div>
  );
}

function HelloReact() {
  const { history, location, match } = useReactRouter();
  return (
    <div>
      <h1>HelloReact</h1>
      <p>{`pathname: ${location.pathname}`}</p>
      <button onClick={() => history.push('/')}>Next</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} exact />
        <Route path="/react" component={HelloReact} exact />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
