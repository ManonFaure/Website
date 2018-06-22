import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Contact.css';
import {FormGroup, ControlLabel, FormControl, HelpBlock, FormExample} from 'react-bootstrap';

class Contact extends React.Component {
                  
    render() {
        return (
            
            <div className="container">
                <h1>Nous contacter</h1>
                {/*<div className="contacts">{/*Pas utile ?*/
                    /*<p className="contact__adress">
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
                            <label className="control-label col-sm-2" for="nom">Nom:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form__field" id="nom" placeholder="Entrez votre nom" name="nom"/>
                            </div>
                        </div>
                        <div className="form__field--half">
                            <label className="control-label col-sm-2" for="prenom">Prénom:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form__field" id="prenom" placeholder="Entrez votre prénom" name="prenom"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form__field--half">
                                <label className="control-label col-sm-2" for="email">Email:</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form__field" id="email" placeholder="Entrez votre adresse email" name="email"/>
                                </div>
                            </div>
                            <div className="form__field--half">
                                <label className="control-label col-sm-2" for="tel">Télephone:</label>
                                <div className="col-sm-10">
                                    <input type="tel" className="form__field" id="tel" placeholder="Entrez votre numéro de téléphone" name="tel"/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label className="control-label col-sm-2" for="comment">Message:</label>
                            <textarea type="text" placeholder="Messsage" className="form__field form__textarea" placeholder="Un petit mot..."></textarea>
                            <button className="btn btn--up btn--width" type="submit">Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
       )
    }
}


export default Contact;
