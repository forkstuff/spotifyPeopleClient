import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App';
import People from './People';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <Router history={browserHistory}>
  	<Route path="/" component={App}>
  		<IndexRoute component={People}/>
  	</Route>
  </Router>,
  document.getElementById('root')
);
