import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Loader from "./Components/loader";
import * as serviceWorker from './serviceWorker';
//User Axios.get() and send the responsse with 5s delay then redirect after got the response
ReactDOM.render(
  <React.StrictMode>

    <Loader />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
