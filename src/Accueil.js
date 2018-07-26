import React from 'react';
import './stylesheets/Accueil.css';
import 'animate.css'
import telescope from './img/telescope5.jpg';
// import Equipe from './Equipe';
// import ThreeContainer from './ThreeContainer';
// import Naissance from './Naissance';
// import Description from './Description';
// import Public from './Public';
// import Oiseau from './Oiseau';
// import Contact from './Contact';
// import Footer from './Footer';

/*
* La classe Accueil créée la page d'accueuil : l'image de fond ainsi que les texte
*/

class Accueil extends React.Component{
    render(){
        return (
            <section className="accueil">
                <img className="image" src={telescope} alt="telescope" height={window.innerHeight}/>
                <div className="centre animated bounceInDown">
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