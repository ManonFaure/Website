import React from 'react';
import serli from './serli.png';
import './Paragraphe.css';

class Equipe extends React.Component{
    render() {
        return (
            <section className="paragraphe" >

                <h1>Qui sommes nous ?</h1>
                <h3>L'équipe</h3><br/>
                <ul>
                    <li>Canelle Bodin</li>
                    <li>Valentin Burgaud</li>
                    <li>Nathan Fradet</li>
                </ul>
                <p>Atlernants à l'école ENI de Niort pour de diplôme de Bac +4 concepteur développeur informatique</p><br/>
                <h3>L'entreprise</h3><br/>
                <a href="http://www.serli.com/"><img src={serli} alt="Logo Serli" width="200px"/></a>

            </section>
        )
    }
}


export default Equipe;