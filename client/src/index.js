import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //Provider keeps track of the store which is that global state and that allows us to access that store from anywhere inside of the app.
//We do not have to be exactly in a parent or child component . Wew can access that state from anywhere
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//Connecvt our application to redux
import { reducers } from './reducers';
import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk))); //creates the store

ReactDOM.render( // Render the provider as well
  <Provider store={store}> //store we created just above
    <App />
  </Provider>,
  document.getElementById('root'),
);
