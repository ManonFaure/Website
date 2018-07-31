import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './bootstrap/css/bootstrap.css';

/**
 * Point d'entrée de l'application, on apelle le composant App.js qui fera le reste du travail
 */

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>), document.getElementById('app'));
registerServiceWorker();