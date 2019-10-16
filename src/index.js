import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import formtestsOld from './formtestsOld';
import formtestsNew from './formtestsNew';
import Notfound from './notfound'
// import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/formtests-old" component={formtestsOld} />
      <Route path="/formtests-new" component={formtestsNew} />
      <Route component={Notfound} />
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
