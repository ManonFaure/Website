import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Contact.css';
import {FormGroup, FormControl, ControlLabel, Col, Checkbox, Button} from 'react-bootstrap';

class Form extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Nous contacter</h1>
                <form className="form-horizontal">
                  <div className="form-group">
                    <label className="control-label col-sm-2" for="nom">Nom:</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="nom" placeholder="Entrez votre nom" name="nom"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-2" for="prenom">Prénom:</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="prenom" placeholder="Entrez votre prénom" name="prenom"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-2" for="email">Email:</label>
                    <div className="col-sm-10">
                      <input type="email" className="form-control" id="email" placeholder="Entrez votre adresse email" name="email"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-2" for="tel">Télephone:</label>
                    <div className="col-sm-10">
                      <input type="tel" className="form-control" id="tel" placeholder="Entrez votre numéro de téléphone" name="tel"/>
                    </div>
                  </div>
                  
                  <div class="form-group">
                    <label className="control-label col-sm-2" for="comment">Message:</label>
                    <textarea class="form-control form__field form__textarea" col="10" rows="5" placeholder="Un petit mot..." id="comment"></textarea>
                  </div>
                  
                  <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                      <button type="submit" className="btn btn-default">Envoyer</button>
                    </div>
                  </div>
                </form>
            </div>

          );
        }
      }
      
      /*render(<Form />);*/
      export default Form;
