import React from 'react';
import './stylesheets/base.css';
import './stylesheets/Paragraphe.css';

/**
 * La classe Equipe créée un des paragraphes de la page.
 * Ce composant répond au style commun aux autres paragraphes : Paragraphe.css
 */

class Naissance extends React.Component{
    render() {
        return (
            <section className="paragraphe">
                <h1>Comment est né le projet ?</h1><br/>

                <div className="justify">
                    <p>Canelle, passionnée d'astronomie :</p><br/>
                    <p><q>Lors de l’entretien pour venir à Serli, j’ai fait par de mon intérêt pour l’astronomie à notre Président Jérôme Petit
                    qui part la suite m'a proposer de développer une application mobile en react native.
                    L’idée d’un projet qui allie objet connecté, télescope et application mobile a germé
                    et nous avons commencé à travailler sur le prototype d’Open Stars.
                    </q></p>
                </div>
            </section>
        )
    }
}


export default Naissance;