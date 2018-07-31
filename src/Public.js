import React from 'react';
import './stylesheets/Paragraphe.css';

/**
 * La classe Public créée un des paragraphes de la page.
 * Ce composant répond au style commun aux autres paragraphes : Paragraphe.css
 */

class Public extends React.Component{
    render() {
        return (

            <section className="paragraphe" >

                <h1>À qui s'adresse l'application ?</h1><br/>

                <div className="justify">
                    <h4>Deux types d'utilisateurs :</h4><br/>
                    <ul>
                        <li>Utilisateur chez lui qui a l'application en main et qui veut regarder les photos qui ont été publié et se divertir.</li>
                        <li>Utilisateur qui dispose d'un téléscope et du boitier connecté et qui souhaite publier ses photos sur l'application.</li>
                    </ul><br/>
                    <h4>Pourquoi l'application est intéressante pour ceux qui disposent d'un télescope ?</h4><br/>
                    <ul>
                        <li>Partager sa passion avec d'autres passionnés d'astronomie.</li>
                        <li>Aider les débutants dans l'astrophotographie.</li>
                        <li>Aider les personnes qui veulent un partage de connaissance sur le sujet.</li>
                        <li>Se divertir par les jeux.</li>
                        <li>Se renseigner de la météo pour préparer les futures observations.</li>
                        <li>Obtenir les coordonnées des planètes.</li>
                        <li>Se connecter à son télescope.</li>
                        <li>Avoir les astres en temps réel avec le planétarium.</li>
                    </ul>
                </div>
               
            </section>

        )
    }
}

export default Public;