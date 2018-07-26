import React from 'react';
import serli from './img/serli.png';
import './stylesheets/Paragraphe.css';

/**
 * La classe Equipe créée un des paragraphes de la page.
 * Ce composant répond au style commun aux autres paragraphes : Paragraphe.css
 */

class Equipe extends React.Component{
    render() {
        return (

            <section className="paragraphe" >
                <h1>Qui sommes nous ?</h1>
                <h3>L'équipe</h3>
                <ul>
                    <li>Canelle Bodin</li>
                    <li>Valentin Burgaud</li>
                    <li>Nathan Fradet</li>
                </ul>
                <p>Atlernants à l'école ENI de Niort pour le diplôme de Bac +4 concepteur développeur informatique</p>
                <br/>
                <h3>L'entreprise</h3>
                <a href="http://www.serli.com/"><img src={serli} alt="Logo Serli" /></a>             
            </section>  
        )
    }
}

export default Equipe;