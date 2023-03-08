import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ListEventComponent from './components/ListEventComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateEventComponent from './components/CreateEventComponent';
import UpdateEventComponent from './components/UpdateEventComponent';

ReactDOM.render(
  <React.StrictMode>
<App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
