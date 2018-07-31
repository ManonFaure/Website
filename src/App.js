import React from 'react';
import Header from './Header.js';

/**
 * Cette classe est la classe principale de notre application. 
 * Elle appelle le composant Header qui gère ensuite l'affichage des pages en fonction des routes.
 */

class App extends React.Component {

    render() {

        return (

            <div className="top">

                <Header/> {/*Barre de navigation*/}
                
            </div>
        );
    }
}

export default App;
