import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './bootstrap/css/bootstrap.css';
// import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'

// import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'

/**
 * Point d'entrée de l'application, on apelle le composant App.js qui fera le reste du travail
 */

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>), document.getElementById('app'));
registerServiceWorker();