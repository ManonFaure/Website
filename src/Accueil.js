import React from 'react';
import './stylesheets/Accueil.css';
import 'animate.css' // librairie qui permet de rendre le bloc titre dynamique
import telescope from './img/telescope5.jpg';

/**
 * 
 * La classe Accueil créée la page d'accueil : l'image de fond ainsi que les texte
 * C'est la première page qui apparaît, avec le telescope et le titre
 */

class Accueil extends React.Component{
    render(){
        return (
            <section className="accueil">
                {/* On adapte la taille de l'image à la largeur de l'écran
                  * /!\ Pas très jolie selon la dimension de l'écran + ne se réactulise pas 
                  * tout seul lors du redimensionnement de la fenêtre
                  */}
                <img className="image" src={telescope} alt="telescope" height={window.innerHeight}/>
                <div className="centre animated bounceInDown"> {/* On appelle l'animation bounceInDown de la librairie animate */}
                    <div className="texte">
                        <br/>
                        <h1>OPEN STARS</h1>
                        <h3>Le seul et unique réseau social d'astronomie</h3>
                        <q>Un projet d'astronomie réalisé par Serli</q>
                        <br/><br/>
                    </div>
                </div>           
            </section>
        )
    }
}

export default Accueil;