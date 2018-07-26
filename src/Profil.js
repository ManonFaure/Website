import React from 'react';
import './stylesheets/Profil.css';
import nasa1 from './img/NASA1.jpg';
import nasa2 from './img/NASA2.jpg';
import nasa3 from './img/NASA3.jpg';
import param from './img/parametre.png';
import header from  './img/headerProfil.jpg';
import { Button, Carousel } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';


// https://www.supinfo.com/articles/single/4556-reactjs-votre-premiere-application
// https://medium.com/inspiration-supply/profile-page-design-inspiration-31878d23f906

class Profil extends React.Component {
    /* constructor(props, context, nom, prenom, pseudonyme) {
        super(props, context); */
    constructor(props){
        super(props);

        /* this.props.nom = nom */

        this.state = {
            showParametres: false,
            showModif: false,
            oldPassword: '',
            emailInscription: '',
            newPassword: '',
            newPseudo: '',
            newDescription: ''
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
        event.prenventDefault();
    }

    handleSubmitModif(event) {
        alert('Nouveau pseudo: ' + this.state.newPseudo);
        alert('Description: ' + this.state.newDescription);
        event.prenventDefault();
    }

    /**
     * 
     * @param {*} nbAbo => nombre courant d'abonnés 
     * permet d'incrémenter le nombre d'abonnés si un utilisateur s'abonne
     */

    countAbo(nbAbo){
        nbAbo=1
        return (nbAbo+1)
    }


    render() {

        let abonnes = this.countAbo();
        console.log(abonnes);

        let nom = this.props.nom;
        nom = "Armstrong";
        console.log(nom);

        let prenom = this.props.prenom;
        prenom = "Neil";
        console.log(prenom);

        let pseudonyme = this.props.pseudonyme;
        pseudonyme = "Gemini";
        console.log(pseudonyme);

        let description= this.props.description;
        description = "Une petite description de l'utilisateur, ses passions, depuis combien de temps il pratique l'astronomie"
        console.log(description);

        /* var div = document.getElementsByClassName('photo');
        div.addEventListener('click', (event) => {
            this.countAbo(event.abonnes);
        }); */

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
                    <p className="description">Astronome {pseudonyme}</p><br/>
                    <div className="ligne"></div><br/>
                    <div className="description">{description}</div>
                </div><br/><br/>

                {/* Boutons permettant de modifier son profil et les paramètres de son compte */}
                <div className="parametres">

                    <button className="modifProfil" onClick={this.handleShowModif} >Modifier votre profil
                    <Modal show={this.state.showModif} onHide={this.handleCloseModif}>
                            <Modal.Header closeButton>
                                <Modal.Title className="titre">Modifier votre profil</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="corps">
                                <form onSubmit={this.handleSubmitModif}>
                                    <div className="form__body">
                                        <label for="pays">Modifier votre pseudonyme ?</label>
                                        <input type="text" id="newPseudo" value={this.state.newPseudo} onChange={(event) => { this.handleChangeModif({ newPseudo: event.target.value }) }} placeholder="Ancien mot de passe" />                               
                                        <div class="form-group">
                                            <label for="pays">Modifier votre description</label>
                                            <textarea class="form-control" rows="5" id="newDescription" value={this.state.newDescription} onChange={(event) => { this.handleChangeModif({ newDescription: event.target.value }) }} placeholder="Nouveau mot de passe"></textarea>
                                        </div>  
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
                <div className="cases">
                    <div className="abonne">
                        <p>Abonné(e)(s)</p>
                        <p>{abonnes}</p>
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
// abonnés, abonnements, publications
//astronome, pseudo
export default Profil;