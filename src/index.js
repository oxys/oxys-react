import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import FormtestsOld from './formtestsOld';
import FormtestsNew from './formtestsNew';
import Notfound from './notfound'
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/formtests-old" component={FormtestsOld} />
        <Route path="/formtests-new" component={FormtestsNew} />
        <Route component={Notfound} />
      </Switch>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/formtests-old">FormtestsOld</Link>
        </li>
        <li>
          <Link to="/formtests-new">FormtestsNew</Link>
        </li>
      </ul>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
