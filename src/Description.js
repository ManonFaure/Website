import React from 'react';
import './stylesheets/Paragraphe.css';

/**
 * La classe Description créée un des paragraphes de la page.
 * Ce composant répond au style commun aux autres paragraphes : Paragraphe.css
 */

class Description extends React.Component{
    render() {
        return (

            <section className="paragraphe">
                
                <h1>Qu'est-ce qu'Open Stars ?</h1><br/>
                <div className="justify">
                    <p>Rendre l'astronomie accessible !</p><br/>
                    <p>Il s'agit d'un projet d'astronomie collaborative.
                    Les utilisateurs du projet peuvent être de toute tranche d'âge :</p>
                    <ul>
                        <li>Les jeunes à l'école peuvent l'utiliser au niveau éducatif avec les jeux sur l'application</li>
                        <li>Les adolescents ainsi que les plus vieux peuvent l'utiliser pour le côté réseau social et informations sur l'univers</li>
                    </ul>
                    <br/>
                    <p>Cette application s'adresse aux personnes souhaitant :</p>
                    <ul>
                    <li>Découvrir l'astronomie</li>
                        <li>Voir des photos de planètes et d'étoiles en direct</li>
                        <li>Connaître les actualités de l'espace (NASA, satellites, découvertes...)</li>
                        <li>Discuter, prendre contact avec des passionnés d'astronomie. Open Stars est le seul et unique réseau social autour de l'astronomie</li>
                        <li>Se divertir sur le thème de l'astronomie</li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Description;