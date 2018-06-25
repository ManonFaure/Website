import React from 'react';
import './Accueil.css';
import * as animate from 'animate.css'
import telescope from './img/telescope5.jpg'

class Accueil extends React.Component{
    render(){
        return (

            <section className="accueil container-fluid">
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