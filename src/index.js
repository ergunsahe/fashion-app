import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router/Router';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import {reducer, initialValue} from './context';
import {createStore} from 'redux';

const store = createStore(reducer, initialValue)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
