import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
// import {Router, hashHistory as history} from 'react-router';
// import Header from './Header.js';
import registerServiceWorker from './registerServiceWorker';
import './bootstrap/css/bootstrap.css';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>), document.getElementById('app'));
registerServiceWorker();