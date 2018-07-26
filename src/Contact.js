import React from 'react';
import './stylesheets/Contact.css';
import './stylesheets/Paragraphe.css';

/**
 * La classe Contact créée le formulaire de contact situé en bas de page sur l'application web
 * Elle récupère chaque champ pour pouvoir envoyer leur contenu par mail
 * On utilise un mailto pour envoyer les champs = pas terrible
 */

class Contact extends React.Component {
    constructor(props, context) {
    	super(props, context);

        /* On stocke les noms des champs du formailaire dans le state */
		this.state = {
			nom: '',
			prenom: '',
			email: '',
			tel: '',
			message: '',
		};

        /* Déclaration de la fonction d'envoi */
		this.handleSubmit = this.handleSubmit.bind(this);       
	}

	handleChange(objet) {
		this.setState(objet);
	}


	handleSubmit(event) {
		/*alert('Nom: '+ this.state.nom);
		alert('Prenom:'+ this.state.prenom);
		alert('Mail: '+ this.state.email);
		alert('Téléphone: '+ this.state.tel);
		alert('Message: '+ this.state.message);
        alert('Message envoyé');*/
        //event.prenventDefault();
    } 
                  
    render() {
        
        return (
            
            <div className="contacts">
                <h1>Nous contacter</h1>
   
                <div className="form-container">
                    <form className="form" action="mailto:manon.faure@serli.com?subject=Formulaire Open Stars" name="envoi" method="POST" encType="text/plain" onSubmit={this.handleSubmit}> 
                        <input type="hidden" name="subject" value="Formulaire de contact"/>
                        <div className="form__field--half">
                            <label className="control-label col-sm-2" htmlFor="nom">Nom:</label>
                            <div className="col-sm-10">
                                <input type="text" required className="form__field" id="nom" value={this.state.nom} onChange={(event)=>{this.handleChange({nom:event.target.value})}} placeholder="Entrez votre nom" name="nom"/>
                            </div>
                        </div>
                        <div className="form__field--half">
                            <label className="control-label col-sm-2" htmlFor="prenom">Prénom:</label>
                            <div className="col-sm-10">
                                <input type="text" required className="form__field" id="prenom" value={this.state.prenom} onChange={(event)=>{this.handleChange({prenom:event.target.value})}} placeholder="Entrez votre prénom" name="prenom"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form__field--half">
                                <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                                <div className="col-sm-10">
                                    <input type="email" required className="form__field" id="email" value={this.state.email} onChange={(event)=>{this.handleChange({email:event.target.value})}} placeholder="Entrez votre adresse email" name="email"/>
                                </div>
                            </div>
                            <div className="form__field--half">
                                <label className="control-label col-sm-2" htmlFor="tel">Télephone:</label>
                                <div className="col-sm-10">
                                    <input type="tel" className="form__field" pattern="\d+" id="tel" value={this.state.tel} onChange={(event)=>{this.handleChange({tel:event.target.value})}} placeholder="Entrez votre numéro de téléphone" name="tel"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="comment">Message:</label>
                            <textarea type="text" required name="message" className="form__field form__textarea" placeholder="Un petit mot..." value={this.state.message} onChange={(event)=>{this.handleChange({message:event.target.value})}}></textarea>
                            <input type="submit" className="btn btn--up btn--width" value="Envoyer"/>
                        </div>
                    </form>
                </div>
            </div>
       )
    }
}

export default Contact;
