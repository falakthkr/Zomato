import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import './index.css';
import {BrowserRouter} from "react-router-dom"
import App from './App';
import {store} from "./Redux/store"

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
