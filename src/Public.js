import React from 'react';
import './App.css';
import './base.css';
import './main.css';


class Public extends React.Component{
    render() {
        return (

            <div className="paragraphe">
                <section className="s-home target-section" >

                    <div className="overlay"></div>
                    <div className="shadow-overlay"></div>

                    <div className="home-content">

                        <div className="row home-content__main">

                            <h1>A qui s'adresse l'application ?</h1>

                            <div className="col-full">
                                <p>Deux types d'utilisateurs :</p>
                                <ul>
                                    <li>Utilisateur chez lui qui a l'application en main et qui veut regarder les photos qui ont été publié et se divertir.</li>
                                    <li>Utilisateur qui dispose d'un téléscope et du boitier connecté et qui souhaite publier ses photos sur l'application</li>
                                </ul>

                                <h3>Pourquoi l'application est intéressante pour ceux qui disposent d'un télescope ?</h3>
                                <ul>
                                    <li>Partager sa passion avec d'autres passionnés d'astronomie</li>
                                    <li>Aider les débutants dans l'astrophotographie</li>
                                    <li>Aider les personnes qui veulent un partage de connaissance sur le sujet</li>
                                    <li>Se divertir par les jeux</li>
                                    <li>Se renseigner de la météo pour préparer les futures observations</li>
                                    <li>Obtenir les coordonnées des planètes</li>
                                    <li>Se connecter à son télescope</li>
                                    <li>Avoir les astres en temps réel avec le planétarium</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
        	</div>

        )
    }
}


export default Public;