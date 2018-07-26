import React from 'react';
import Header from './Header.js';
// import Profil from './Profil.js';
// import MainPage from './MainPage';

/*
* Cette classe est la classe principale de notre application. 
* Elle appelle le composant Header qui gère ensuite l'affichage des pages en fonction des routes.
*/

class App extends React.Component {

	constructor() {
        super();
        this.state = {
            scrollPosition: undefined
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }


    handleScroll() {
        const scrollPosition = window.pageYOffset;
        this.setState({
            scrollPosition
        });
    };


    render() {
        
        //let CheminComplet = document.location.href;
        /* let CheminRepertoire  = CheminComplet.substring( 0 ,CheminComplet.lastIndexOf( "/" ) );
        let NomDuFichier     = CheminComplet.substring(CheminComplet.lastIndexOf( "/" )+1 ); */
        /* console.log("Chemin Complet: ", CheminComplet);
        console.log("Chemin Repertoire: ", CheminRepertoire);
        console.log("Nom du Fichier: ", NomDuFichier); */
        /* let url = "http://localhost:3000/";
        if (url = "http://localhost:3000/profil"){
            <Profil/> 
        }
 */
        /* if (CheminComplet === "http://localhost:3000/profil"){
            <Profil />
        }else{
            <MainPage />
        } */
        return (

            <div className="top">

                <Header/> {/*Barre de navigation*/}
                
            </div>
        );
    }
}

export default App;
