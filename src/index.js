// src/index.js

import React from "react";
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import registerServiceWorker from './utils/registerServiceWorker';

import App from './containers/App';
import Routes from './routes';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
registerServiceWorker();
'root'