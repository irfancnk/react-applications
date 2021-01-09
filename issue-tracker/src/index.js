// PACKAGES
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// MODULES
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './store/initial-state.json';
import storeFactory from './store';
import { recoverAuth } from './controllers/user-controller';
// STYLES
import './index.css';

// Recover authentication state using cookie token
var store = storeFactory(recoverAuth(state));

// Application wrapped with redux provider for state management
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
