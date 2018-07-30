import React from 'react';
import './stylesheets/Profil.css';
import nasa1 from './img/NASA1.jpg';
import nasa2 from './img/NASA2.jpg';
import nasa3 from './img/NASA3.jpg';
import param from './img/parametre.png';
import { Button, Carousel } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import './Utilisateurs.js';
import abonnes from './img/abonnement.png';


// https://www.supinfo.com/articles/single/4556-reactjs-votre-premiere-application
// https://medium.com/inspiration-supply/profile-page-design-inspiration-31878d23f906

const DEFAULT_STATE = { newPseudo: ''} 
let PSEUDO = "Armstrong"

class Profil extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            showParametres: false,
            showModif: false,
            oldPassword: '',
            emailInscription: '',
            newPassword: '',
            newPseudo: PSEUDO,
            pseudo: '',
            nbAbo: 0
            /*newDescription: '',*/
        };

        this.handleShowParametres = this.handleShowParametres.bind(this);
        this.handleCloseParametres = this.handleCloseParametres.bind(this);
        this.handleSubmitParametres = this.handleSubmitParametres.bind(this);

        this.handleShowModif = this.handleShowModif.bind(this);
        this.handleCloseModif = this.handleCloseModif.bind(this);
        this.handleSubmitModif = this.handleSubmitModif.bind(this);
        
    }

    handleCloseParametres() {
        this.setState({ showParametres: false });
    }

    handleCloseModif() {
        this.setState({ showModif: false });
    }

    handleShowParametres() {
        this.setState({ showParametres: true });
    }

    handleShowModif() {
        this.setState({ showModif: true });
    }

    handleChangeParametres(objet) {
        this.setState(objet);
    }

    handleChangeModif(objet) {
        this.setState(objet);
    }

    handleSubmitParametres(event) {
        alert('Ancien mdp: ' + this.state.oldPassword);
        alert('Password: ' + this.state.newPassword);
    }

    handleSubmitModif(event) {
        console.log("pseudo actuel", this.state.newPseudo)
        alert('Nouveau pseudo: ' + this.state.newPseudo);
        alert('Description: ' + this.state.newDescription);
        //const pseudo = this.modifPseudo();
        PSEUDO = this.state.newPseudo;
        
    }

    /**
     * 
     * @param {*} pseudo 
     * Function permettant de changer l'ancien pseudo par le nouveau défini par l'utilisateur.
     * /!\ Problème : À la fermeture du modal, les modifs ne restent pas 
     */
    /* modifPseudo = () => {
        const modifPseudo = this.state.newPseudo
        console.log("modifPseudo :", modifPseudo);
        this.setState({newPseudo : modifPseudo});
        console.log("pseudo :", this.state.newPseudo);

    } */
    
    
    /**
     * 
     * @param {*} nbAbo => nombre courant d'abonnés 
     * Permet d'incrémenter le nombre d'abonnés si un utilisateur s'abonne
     * /!\ Manque le style du bouton d'abonnement + l'initialisation du nombre d'abonnés(récupérer les infos du serveur)
     * Bouton à géré avec un listener onClick : <button onClick={ ( ) => this.increment() }>
     */

    countAbo(){
        this.setState({nbAbo : this.state.nbAbo+1})
    }

    /**
     * https://gkueny.fr/react-lecon-2
     */
    randomPseudo = () => {

        // On s'amuse un peu ;)
        let randomPseudo    = ""
        const possible      = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        const size          = Math.floor(Math.random() * 10) + 5

        for( let i=0; i < size; i++ )
            randomPseudo += possible.charAt(Math.floor(Math.random() * possible.length))

        // On met à jour le state via la fonction "setState" héritée de la classe Component
        this.setState({
            newPseudo : randomPseudo
        })
    } 


    render() {

        //let abonnes = this.countAbo();

        let nom = this.props.nom;
        nom = "Armstrong";

        let prenom = this.props.prenom;
        prenom = "Neil";

        /* let pseudonyme = this.state.newPseudo; */

        let description= this.props.description;
        description = "Une petite description de l'utilisateur, ses passions, depuis combien de temps il pratique l'astronomie"
         
        console.log("pseudo actuel", this.state.newPseudo)

        return (
            <section className="profil" >
            
                
                {/** Haut de page */}
                <div className="bandeau">{/* <img src={header} alt="header"/> */}</div>
        
                <div className="flex">
                    <div className="abonnement"></div>
                    <div className="photo" >{/* <img id="photo_profil" src={user} alt="photo_profil"/> */}</div>
                </div>
                <div className="user">
                    <h4 className="pseudo">{nom} {prenom}</h4>
                    <p className="description">Astronome {this.state.newPseudo}</p><br/>
                    <div className="ligne"></div><br/>
                    <div className="description">{description}</div>
                </div><br/><br/>
                <p> <a onClick={ this.randomPseudo } >Changer le pseudo !</a> </p>

                {/* Boutons permettant de modifier son profil et les paramètres de son compte */}
                <div className="parametres">

                    <button className="modifProfil" onClick={this.handleShowModif} >Modifier votre profil
                    <Modal show={this.state.showModif} onHide={this.handleCloseModif}>
                            <Modal.Header closeButton>
                                <Modal.Title className="titre">Modifier votre profil</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="corps">
                                <form name="profil" onSubmit={this.handleSubmitModif}>
                                    <div className="form__body">
                                        <label htmlFor="pays">Modifier votre pseudonyme ?</label>
                                        <input name="newPseudo" type="text" id="newPseudo" value={this.state.newPseudo} onChange={(event) => { this.handleChangeModif({ newPseudo: event.target.value }) }} placeholder="Nouveau pseudo" />                               
                                        <label htmlFor="pays">Modifier votre description</label><br/>
                                        <textarea className="form-control" rows="5" id="newDescription" value={this.state.newDescription} onChange={(event) => { this.handleChangeModif({ newDescription: event.target.value }) }} placeholder="Nouvelle description"></textarea>
                                    </div>
                                    <input type="submit" className="validButton" value="Valider les changements" />
                                    
                                </form>
                            </Modal.Body>
                        </Modal>
                    </button>
                    
                    {/* Modal pour accéder aux paramètres */}
                    <a className="param" onClick={this.handleShowParametres}>
                        <img src={param} alt="Parametres"/> 
                        <Modal show={this.state.showParametres} onHide={this.handleCloseParametres}>
                            <Modal.Header closeButton>
                                <Modal.Title className="titre">Parametres</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="corps">
                                <form onSubmit={this.handleSubmitParametres}>
                                    <div className="form__body">
                                        <label for="pays">Modifier votre mot de passe ?</label>
                                        <input type="password" id="oldPassword" value={this.state.oldPassword} onChange={(event) => { this.handleChangeParametres({ oldPassword: event.target.value }) }} placeholder="Ancien mot de passe" />
                                        <input type="password" id="newPassword" value={this.state.newPassword} onChange={(event) => { this.handleChangeParametres({ newPassword: event.target.value }) }} placeholder="Nouveau mot de passe" />
                                    </div>
                                    <input type="submit" className="validButton" value="Valider les changements" />
                                </form>
                            </Modal.Body>
                        </Modal>
                    </a>


                </div><br/><br/>

                <a className="follow" onClick={ ( ) => this.countAbo() }><img src={abonnes} alt="header"/></a>

                <div className="cases">
                    <div className="abonne">
                        <p>Abonné(e)(s)</p>
                        <p>{this.state.nbAbo}</p>
                    </div>
                    <div className="abonnement">
                        <p>Abonnement(s)</p>
                        <p>10</p>
                    </div>
                    <div className="publication">
                        <p>Publication(s)</p>
                        <p>3</p>
                    </div>
                </div>
                <div className="gallerie">
                    <h4>Votre galerie de photos :</h4>

                     <Carousel>
                        <Carousel.Item>
                            <img width={window.innerWidth} alt="img1" src={nasa1} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={window.innerWidth} alt="img2" src={nasa2} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={window.innerWidth} alt="img3" src={nasa3} />
                        </Carousel.Item>
                    </Carousel> 
                    {/* <img className="photos" width={window.innerWidth/3} alt="img1" src={nasa1} />
                    <img className="photos" width={window.innerWidth/3} alt="img2" src={nasa2} />
                    <img className="photos" width={window.innerWidth/3} alt="img3" src={nasa3} />
                    
 */}

                </div><br/>
                {/* <Button type="file">Ajouter une photo</Button> */}
                <div className="form-group">
                    <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                </div>
                <Button>Demander une photo</Button>
                    
            </section>
        )
    }
}

export default Profil;