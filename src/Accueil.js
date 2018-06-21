import React from 'react';
import './Accueil.css';
import * as animate from 'animate.css'
import telescope from './img/telescope5.jpg'

class Accueil extends React.Component{
    render(){
        return (
            <div className="accueil">
                <img className="image" src={telescope} alt="telescope"/>
                <section className="home">

                    <div className="overlay"></div>
                    <div className="shadow-overlay"></div>

                    <div className="home-content animated bounceInDown">
                        {/*<div className="row home-content__main">*/}
                        <div className="texte">
                            <br/>
                            <h1>OPEN STARS</h1>
                            <h3>Le seul et unique réseau social d'astronomie</h3>
                            <q className="slogan">Un projet d'astronomie réalisé par Serli</q>
                            <br/><br/>
                        {/*</div>*/}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Accueil;