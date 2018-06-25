import React from 'react';
import serli from './serli.png';

class Equipe extends React.Component{
    render() {
        return (
            <section className="paragraphe container-fluid" >

                    <div className="overlay"></div>
                    <div className="shadow-overlay"></div>

                    <div className="home-content">
                        <div className="row home-content__main">
                            <h1>Qui sommes nous ?</h1>
                            <div className="col-full">
                                <h3>L'équipe</h3>
                                <ul>
                                    <li>Canelle Bodin</li>
                                    <li>Valentin Burgaud</li>
                                    <li>Nathan Fradet</li>
                                </ul>
                                <p>Atlernants à l'école ENI de Niort pour de diplôme de Bac +4 concepteur développeur informatique</p>
                                <br/>
                                <h3>L'entreprise</h3>
                                <a href="http://www.serli.com/"><img src={serli} alt="Logo Serli" /></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            </div>
        )
    }
}


export default Equipe;