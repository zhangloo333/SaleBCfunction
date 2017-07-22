import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// delte app
// import App from './components/app';
import reducers from './reducers';

import routes from './routes';
import {Router, browserHistory} from 'react-router';
// add in 73

import promise from 'redux-promise';
// add in 77 fetch data from api

const createStoreWithMiddleware = applyMiddleware(
  //add in 77 add promis for fetch data
  promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
