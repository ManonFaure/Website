import React from 'react';
import './App.css';
import './base.css';
import './main.css';


class Naissance extends React.Component{
    render() {
        return (

            <div className="paragraphe">
                <section className="s-home target-section">

                    <div className="overlay"></div>
                    <div className="shadow-overlay"></div>

                    <div className="home-content">

                        <div className="row home-content__main">

                            <h1>Comment est né le projet ?</h1>

                            <div className="col-full">
                                Canelle, passionnée d'astronomie :
                                <p><q>Lors de l’entretien pour venir à Serli, j’ai fait par de mon intérêt pour l’astronomie à notre Président Jérôme Petit
                                qui part la suite m'a proposer de développer une application mobile en react native.
                                L’idée d’un projet qui allie objet connecté, télescope et application mobile a germé
                                et nous avons commencé à travailler sur le prototype d’Open Stars.
                                </q></p>
                            </div>

                        </div>

                    </div>
                </section>
            </div>
        )
    }
}


export default Naissance;