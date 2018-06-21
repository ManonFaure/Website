import React from 'react';
import './Contact.css';

class Contact extends React.Component{
    render() {
        return (
            
            <div className="container">
                <h1 className="row__title">Nous contacter</h1>
                {/*<div className="contacts">{/*Pas utile ?*/}
                    {/*<p className="contact__adress">
                        SERLI<br/>
                        Avenue Thomas Edison, BP 20160,<br/>
                        86960 Futuroscope Cedex, France<br/>
                    </p>
                    <p className="contacts__info">
                        Tél. +33 5 49 49 49 30
                    </p>
        </div>*/}
                <div className="form-container">
                <form className="form"> 
                    <div className="form__field--half">
                        <input type="text" placeholder="Nom" className="form__field"></input>
                    </div>
                    <div className="form__field--half">
                        <input type="text" placeholder="Prénom" className="form__field"></input>
                    </div>
                    <div className="form-group">
                        <div className="form__field--half">
                            <input type="text" placeholder="Email" className="form__field"></input>
                        </div>
                        <div className="form__field--half">
                            <input type="text" placeholder="Téléphone" className="form__field form__text"></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea type="text" placeholder="Messsage" className="form__field form__textarea"></textarea>
                        <button className="btn btn--up btn--width" type="submit">Envoyer</button>
                    </div>
                </form>
                </div>
            </div>

                /*<div className="container">
                        <h1 className="row__title">Nous contactez</h1>
                        <h2>Nous écrire</h2>
               
                    <div className="row row--margin">
                        <div className="contacts">
                            <p className="contacts__address">
                                431 Broadway, Floor 1-2<br/>
                                New York NY 10013<br/>
                                United States
                            </p>
                            <p className="contacts__info">
                                tel. <a href="#" className="contacts__info-link">+1 234 567 890</a>
                            </p>
                        </div>
                        <form id="contact" className="form">
                            <div className="form-group">
                                <div className="form__field--half">
                                    <input type="text" placeholder="Nom" className="form__field form__text"></input>
                                </div>
                                <div class="form__field--half">
                                    <input type="text" placeholder="Prénom" className="form__field form__text"></input>
                                </div>
                            </div>
                        
                            <div className="form-group">
                                <div className="form__field--half">
                                    <input type="text" placeholder="Email" className="form__field form__text"></input>
                                </div>
                                <div className="form__field--half">
                                    <input type="text" placeholder="Téléphone" className="form__field form__text"></input>
                                </div>
                            </div>
                    
                            <div className="form-group">
                                <textarea type="text" placeholder="Messsage" className="form__field form__textarea"></textarea>
                                <button className="btn btn--up btn--width" type="submit">Envoyer</button>
                            </div>
                        </form>
                    </div>
        </div>*/
          
        )
    }
}


export default Contact;
