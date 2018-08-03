import React from 'react';
import Accueil from './Accueil.js';
import ThreeContainer from './ThreeContainer.js';
import Equipe from './Equipe.js';
import Naissance from './Naissance.js';
import Oiseau from './Oiseau.js';
import Description from './Description.js';
import Public from './Public.js';
import Contact from './Contact.js';
import Footer from './Footer.js';

/**
 * Chaque composant est placé dans <div></div> afin de pour les gérer individuellement et certains sont suivis 
 * de "divVid" qui permet de créer un espace entre chaque paragraphe
 */

class MainPage extends React.Component {

    render() {
        return (

            <div className="top">

                <div id="accueil">
                    <Accueil/> {/*Page d'accueil*/}
                </div>
                
                <div className="divVid"></div> {/*Balise créant un espace entre chaque paragraphe*/}

                <div className="divCanvas">
                    <ThreeContainer /> {/*Scène principale de l'app*/}
                </div>

                {/* Paragraphes */}
                <div id="equipe">
                    <Equipe/>
                </div>

                <div className="divVid"></div>

                <div id="naissance">
                    <Naissance/>
                </div>

                <div className="divVid"></div>

                <div id="description">
                    <Description/>
                </div>

                <div className="divVid"></div>

                <div id="public">
                    <Public/>
                </div>

                <div className="divVid"></div>


                <div className="banner">
                    {/* <div id="cloud-scroll"></div> */} {/*Crée les nuages qui défilent*/}
                    <div id="oiseau">
                        <Oiseau />
                    </div>
                </div>

                {/*Formulaire de contact*/}
                <div id="contact">
                    <Contact/>
                </div>

                {/*Scène de bas de page*/}
                <div id="footer">
                    <Footer width={window.innerWidth}
                            height='200'/>
                </div>
                
            </div>
        );
    }
}

export default MainPage;
